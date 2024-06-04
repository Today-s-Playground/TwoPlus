import { configureStore } from '@reduxjs/toolkit';
import reviewInfoSlice from '../slices/reviewInfoSlice';
import strategyInfoSlice from '../slices/strategyInfoSlice';

const store = configureStore({
  reducer: {
    reviewInfo: reviewInfoSlice,
    strategyInfo: strategyInfoSlice
  }
});

export default store;
