import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../shared/supabaseClient';

export const fetchStrategyInfo = createAsyncThunk('strategyInfo/fetchStrategyInfo', async () => {
  const { data, error } = await supabase.from('Strategy').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

export const addStrategyInfo = createAsyncThunk('strategyInfo/addStrategyInfo', async (action) => {
  const { data, error } = await supabase
    .from('Strategy')
    .insert({
      game_name: action.gamename,
      title: action.title,
      user_name: action.username,
      content: action.content
    })
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

export const deleteStrategyInfo = createAsyncThunk('strategyInfo/deleteStrategyInfo', async (action) => {
  const { data, error } = await supabase.from('Strategy').delete().eq('id', action.id).select('*');
  if (error) throw error;
  return data;
});

export const updateStrategyInfo = createAsyncThunk('strategyInfo/updateStrategyInfo', async (action) => {
  const { data, error } = await supabase
    .from('Strategy')
    .update({ content: action.content })
    .eq('id', action.id)
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
});

const strategyInfoSlice = createSlice({
  name: 'strategyInfo',
  initialState: {
    strategyInfo: [],
    status: 'idle', // 비동기 작업의 상태를 나타내는 필드
    error: null // 비동기 작업에서 발생한 에러를 저장하는 필드
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStrategyInfo.pending, (state) => {
        state.status = 'loading'; // 작업이 진행 중임을 나타내는 상태
      })
      .addCase(fetchStrategyInfo.fulfilled, (state, action) => {
        state.status = 'succeeded'; // 작업이 성공적으로 완료됨을 나타내는 상태
        state.strategyInfo = action.payload; // 가져온 데이터를 상태에 저장함
      })
      .addCase(fetchStrategyInfo.rejected, (state, action) => {
        state.status = 'failed'; // 작업이 실패했음을 나타내는 상태
        state.error = action.error.message; // 에러 메시지를 상태에 저장
      })
      .addCase(addStrategyInfo.fulfilled, (state, action) => {
        state.strategyInfo = [action.payload[0], ...state.strategyInfo];
      })
      .addCase(addStrategyInfo.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteStrategyInfo.fulfilled, (state, action) => {
        state.strategyInfo =
          action.payload.length === 0
            ? state.strategyInfo
            : state.strategyInfo.filter((info) => info.id !== action.payload[0].id);
      })
      .addCase(deleteStrategyInfo.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateStrategyInfo.fulfilled, (state, action) => {
        state.strategyInfo =
          action.payload.length === 0
            ? state.strategyInfo
            : state.strategyInfo.map((info) =>
                info.id === action.payload[0].id ? { ...action.payload[0], content: action.payload[0].content } : info
              );
      })
      .addCase(updateStrategyInfo.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default strategyInfoSlice.reducer;
