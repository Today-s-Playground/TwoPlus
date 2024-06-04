import { configureStore } from '@reduxjs/toolkit';
import reviewInfoSlice from '../slices/reviewInfoSlice';
import strategyInfoSlice from '../slices/strategyInfoSlice';
import questionInfoSlice from '../slices/questionInfoSlice';

const store = configureStore({
  reducer: {
    reviewInfo: reviewInfoSlice,
    strategyInfo: strategyInfoSlice,
    questionInfo: questionInfoSlice
  }
});

export default store;
