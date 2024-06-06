import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../shared/supabaseClient';

export const fetchReviewInfo = createAsyncThunk('reviewInfo/fetchReviewInfo', async () => {
  const { data, error } = await supabase.from('Review').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

export const addReviewInfo = createAsyncThunk('reviewInfo/addReviewInfo', async (action) => {
  const { data, error } = await supabase
    .from('Review')
    .insert({
      game_name: action.gamename,
      star_score: action.starscore,
      user_name: action.username,
      content: action.content
    })
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

export const deleteReviewInfo = createAsyncThunk('reviewInfo/deleteReviewInfo', async (action) => {
  const { data, error } = await supabase.from('Review').delete().eq('id', action.id).select('*');
  if (error) throw error;
  return data;
});

export const updateReviewInfo = createAsyncThunk('reviewInfo/updateReviewInfo', async (action) => {
  const { data, error } = await supabase
    .from('Review')
    .update({ content: action.content })
    .eq('id', action.id)
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

const reviewInfoSlice = createSlice({
  name: 'reviewInfo',
  initialState: {
    reviewInfo: [],
    status: 'idle', // 비동기 작업의 상태를 나타내는 필드
    error: null // 비동기 작업에서 발생한 에러를 저장하는 필드
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewInfo.pending, (state) => {
        state.status = 'loading'; // 작업이 진행 중임을 나타내는 상태
      })
      .addCase(fetchReviewInfo.fulfilled, (state, action) => {
        state.status = 'succeeded'; // 작업이 성공적으로 완료됨을 나타내는 상태
        state.reviewInfo = action.payload; // 가져온 데이터를 상태에 저장함
      })
      .addCase(fetchReviewInfo.rejected, (state, action) => {
        state.status = 'failed'; // 작업이 실패했음을 나타내는 상태
        state.error = action.error.message; // 에러 메시지를 상태에 저장
      })
      .addCase(addReviewInfo.fulfilled, (state, action) => {
        state.reviewInfo = [action.payload[0], ...state.reviewInfo];
      })
      .addCase(addReviewInfo.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteReviewInfo.fulfilled, (state, action) => {
        state.reviewInfo = state.reviewInfo.filter((info) => info.id !== action.payload[0].id);
      })
      .addCase(deleteReviewInfo.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateReviewInfo.fulfilled, (state, action) => {
        state.reviewInfo = state.reviewInfo.map((info) =>
          info.id === action.payload[0].id ? { ...action.payload[0], content: action.payload[0].content } : info
        );
      })
      .addCase(updateReviewInfo.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default reviewInfoSlice.reducer;
