import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../shared/supabaseClient';

export const fetchInfo = createAsyncThunk('reviewInfo/fetchInfo', async () => {
  const { data, error } = await supabase.from('Review').select('*');
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
  reducers: {
    // addInfo: (state, action) => {},
    // updateInfo: (state, action) => {},
    // deleteInfo: (state, action) => {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfo.pending, (state) => {
        state.status = 'loading'; // 작업이 진행 중임을 나타내는 상태
      })
      .addCase(fetchInfo.fulfilled, (state, action) => {
        state.status = 'succeeded'; // 작업이 성공적으로 완료됨을 나타내는 상태
        state.reviewInfo = action.payload; // 가져온 데이터를 상태에 저장함
      })
      .addCase(fetchInfo.rejected, (state, action) => {
        state.status = 'failed'; // 작업이 실패했음을 나타내는 상태
        state.error = action.error.message; // 에러 메시지를 상태에 저장
      });
  }
});

// export const { addInfo, updateInfo, deleteInfo } = reviewInfoSlice.actions;
export default reviewInfoSlice.reducer;
