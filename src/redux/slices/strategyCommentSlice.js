import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../shared/supabaseClient';

export const fetchStrategyComment = createAsyncThunk('strategyComment/fetchStrategyComment', async () => {
  const { data, error } = await supabase.from('Strategy Comment').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

export const addStrategyComment = createAsyncThunk('strategyComment/addStrategyComment', async (action) => {
  const { data, error } = await supabase
    .from('Strategy Comment')
    .insert({
      user_name: action.username,
      comment: action.comment
    })
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

export const deleteStrategyComment = createAsyncThunk('strategyComment/deleteStrategyComment', async (action) => {
  const { data, error } = await supabase.from('Strategy Comment').delete().eq('id', action.id).select('*');
  if (error) throw error;
  return data;
});

export const updateStrategyComment = createAsyncThunk('strategyComment/updateStrategyComment', async (action) => {
  const { data, error } = await supabase
    .from('Strategy Comment')
    .update({ comment: action.comment })
    .eq('id', action.id)
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

const strategyCommentSlice = createSlice({
  name: 'strategyComment',
  initialState: {
    strategyComment: [],
    status: 'idle', // 비동기 작업의 상태를 나타내는 필드
    error: null // 비동기 작업에서 발생한 에러를 저장하는 필드
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStrategyComment.pending, (state) => {
        state.status = 'loading'; // 작업이 진행 중임을 나타내는 상태
      })
      .addCase(fetchStrategyComment.fulfilled, (state, action) => {
        state.status = 'succeeded'; // 작업이 성공적으로 완료됨을 나타내는 상태
        state.strategyComment = action.payload; // 가져온 데이터를 상태에 저장함
      })
      .addCase(fetchStrategyComment.rejected, (state, action) => {
        state.status = 'failed'; // 작업이 실패했음을 나타내는 상태
        state.error = action.error.message; // 에러 메시지를 상태에 저장
      })
      .addCase(addStrategyComment.fulfilled, (state, action) => {
        state.strategyComment = [action.payload[0], ...state.strategyComment];
      })
      .addCase(addStrategyComment.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteStrategyComment.fulfilled, (state, action) => {
        state.strategyComment =
          action.payload.length === 0
            ? state.strategyComment
            : state.strategyComment.filter((info) => info.id !== action.payload[0].id);
      })
      .addCase(deleteStrategyComment.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateStrategyComment.fulfilled, (state, action) => {
        state.strategyComment =
          action.payload.length === 0
            ? state.strategyComment
            : state.strategyComment.map((info) =>
                info.id === action.payload[0].id ? { ...action.payload[0], comment: action.payload[0].comment } : info
              );
      })
      .addCase(updateStrategyComment.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default strategyCommentSlice.reducer;
