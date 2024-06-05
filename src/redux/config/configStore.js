import { configureStore } from '@reduxjs/toolkit';
import reviewInfoSlice from '../slices/reviewInfoSlice';

const store = configureStore({
  reducer: {
    reviewInfo: reviewInfoSlice
  }
});

export default store;
