import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../shared/supabaseClient';

export const fetchQuestionComment = createAsyncThunk('questionComment/fetchQuestionComment', async () => {
  const { data, error } = await supabase.from('Question Comment').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

export const addQuestionComment = createAsyncThunk('questionComment/addQuestionComment', async (action) => {
  const { data, error } = await supabase
    .from('Question Comment')
    .insert({
      user_name: action.username,
      comment: action.comment
    })
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

export const deleteQuestionComment = createAsyncThunk('questionComment/deleteQuestionComment', async (action) => {
  const { data, error } = await supabase.from('Question Comment').delete().eq('id', action.id).select('*');
  if (error) throw error;
  return data;
});

export const updateQuestionComment = createAsyncThunk('questionComment/updateQuestionComment', async (action) => {
  const { data, error } = await supabase
    .from('Question Comment')
    .update({ comment: action.content })
    .eq('id', action.id)
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

const questionCommentSlice = createSlice({
  name: 'questionComment',
  initialState: {
    questionComment: [],
    status: 'idle', // 비동기 작업의 상태를 나타내는 필드
    error: null // 비동기 작업에서 발생한 에러를 저장하는 필드
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionComment.pending, (state) => {
        state.status = 'loading'; // 작업이 진행 중임을 나타내는 상태
      })
      .addCase(fetchQuestionComment.fulfilled, (state, action) => {
        state.status = 'succeeded'; // 작업이 성공적으로 완료됨을 나타내는 상태
        state.questionComment = action.payload; // 가져온 데이터를 상태에 저장함
      })
      .addCase(fetchQuestionComment.rejected, (state, action) => {
        state.status = 'failed'; // 작업이 실패했음을 나타내는 상태
        state.error = action.error.message; // 에러 메시지를 상태에 저장
      })
      .addCase(addQuestionComment.fulfilled, (state, action) => {
        state.questionComment = [action.payload[0], ...state.questionComment];
      })
      .addCase(addQuestionComment.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteQuestionComment.fulfilled, (state, action) => {
        state.questionComment =
          action.payload.length === 0
            ? state.questionComment
            : state.questionComment.filter((info) => info.id !== action.payload[0].id);
      })
      .addCase(deleteQuestionComment.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateQuestionComment.fulfilled, (state, action) => {
        state.questionComment =
          action.payload.length === 0
            ? state.questionComment
            : state.questionComment.map((info) =>
                info.id === action.payload[0].id ? { ...action.payload[0], comment: action.payload[0].comment } : info
              );
      })
      .addCase(updateQuestionComment.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default questionCommentSlice.reducer;
