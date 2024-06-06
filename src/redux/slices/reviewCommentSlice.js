import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../../shared/supabaseClient';

export const fetchReviewComment = createAsyncThunk('reviewComment/fetchReviewComment', async () => {
  const { data, error } = await supabase;
});
