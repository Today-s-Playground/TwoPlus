import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../shared/supabaseClient';

export const fetchReviewComment = createAsyncThunk('reviewComment/fetchReviewComment', async () => {
  const { data, error } = await supabase.from('Review Comment').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

export const addReviewComment = createAsyncThunk('reviewComment/addReviewComment', async (action) => {
  const { data, error } = await supabase
    .from('Review Comment')
    .insert({
      user_name: action.username,
      comment: action.comment
    })
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

export const deleteReviewComment = createAsyncThunk('reviewComment/deleteReviewComment', async (action) => {
  const { data, error } = await supabase.from('Review Comment').delete().eq('id', action.id).select('*');
  if (error) throw error;
  return data;
});

export const updateReviewComment = createAsyncThunk('reviewComment/updateReviewComment', async (action) => {
  const { data, error } = await supabase
    .from('Review Comment')
    .update({ comment: action.content })
    .eq('id', action.id)
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

const reviewCommentSlice = createSlice({
  name: 'reviewComment',
  initialState: {
    reviewComment: [],
    status: 'idle', // 비동기 작업의 상태를 나타내는 필드
    error: null // 비동기 작업에서 발생한 에러를 저장하는 필드
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewComment.pending, (state) => {
        state.status = 'loading'; // 작업이 진행 중임을 나타내는 상태
      })
      .addCase(fetchReviewComment.fulfilled, (state, action) => {
        state.status = 'succeeded'; // 작업이 성공적으로 완료됨을 나타내는 상태
        state.reviewComment = action.payload; // 가져온 데이터를 상태에 저장함
      })
      .addCase(fetchReviewComment.rejected, (state, action) => {
        state.status = 'failed'; // 작업이 실패했음을 나타내는 상태
        state.error = action.error.message; // 에러 메시지를 상태에 저장
      })
      .addCase(addReviewComment.fulfilled, (state, action) => {
        state.reviewComment = [action.payload[0], ...state.reviewComment];
      })
      .addCase(addReviewComment.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteReviewComment.fulfilled, (state, action) => {
        state.reviewComment =
          action.payload.length === 0
            ? state.reviewComment
            : state.reviewComment.filter((info) => info.id !== action.payload[0].id);
      })
      .addCase(deleteReviewComment.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateReviewComment.fulfilled, (state, action) => {
        state.reviewComment =
          action.payload.length === 0
            ? state.reviewComment
            : state.reviewComment.map((info) =>
                info.id === action.payload[0].id ? { ...action.payload[0], comment: action.payload[0].comment } : info
              );
      })
      .addCase(updateReviewComment.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default reviewCommentSlice.reducer;
