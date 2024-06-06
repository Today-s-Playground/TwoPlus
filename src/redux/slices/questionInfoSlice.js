import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../shared/supabaseClient';

export const fetchQuestionInfo = createAsyncThunk('questionInfo/fetchQuestionInfo', async () => {
  const { data, error } = await supabase.from('Question').select('*');
  if (error) throw error;
  return data;
});

export const addQuestionInfo = createAsyncThunk('questionInfo/addQuestionInfo', async (action) => {
  const { data, error } = await supabase
    .from('Question')
    .insert({
      game_name: action.gamename,
      title: action.title,
      user_name: action.username,
      content: action.content
    })
    .select('*');
  if (error) throw error;
  return data;
});

export const deleteQuestionInfo = createAsyncThunk('questionInfo/deleteQuestionInfo', async (action) => {
  const { data, error } = await supabase.from('Question').delete().eq('id', action.id).select('*');
  if (error) throw error;
  return data;
});

export const updateQuestionInfo = createAsyncThunk('questionInfo/updateQuestionInfo', async (action) => {
  const { data, error } = await supabase
    .from('Question')
    .update({ content: action.content })
    .eq('id', action.id)
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  console.log(data);
  return data;
});

const questionInfoSlice = createSlice({
  name: 'questionInfo',
  initialState: {
    questionInfo: [],
    status: 'idle', // 비동기 작업의 상태를 나타내는 필드
    error: null // 비동기 작업에서 발생한 에러를 저장하는 필드
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionInfo.pending, (state) => {
        state.status = 'loading'; // 작업이 진행 중임을 나타내는 상태
      })
      .addCase(fetchQuestionInfo.fulfilled, (state, action) => {
        state.status = 'succeeded'; // 작업이 성공적으로 완료됨을 나타내는 상태
        state.questionInfo = action.payload; // 가져온 데이터를 상태에 저장함
      })
      .addCase(fetchQuestionInfo.rejected, (state, action) => {
        state.status = 'failed'; // 작업이 실패했음을 나타내는 상태
        state.error = action.error.message; // 에러 메시지를 상태에 저장
      })
      .addCase(addQuestionInfo.fulfilled, (state, action) => {
        state.questionInfo = [action.payload[0], ...state.questionInfo];
      })
      .addCase(addQuestionInfo.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteQuestionInfo.fulfilled, (state, action) => {
        state.questionInfo = state.questionInfo.filter((info) => info.id !== action.payload[0].id);
      })
      .addCase(deleteQuestionInfo.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateQuestionInfo.fulfilled, (state, action) => {
        state.questionInfo = state.questionInfo.map((info) =>
          info.id === action.payload[0].id ? { ...action.payload[0], content: action.payload[0].content } : info
        );
      })
      .addCase(updateQuestionInfo.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default questionInfoSlice.reducer;
