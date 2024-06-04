import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '2RS1HJUZVWY9I9XK';

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  const response = await axios.get(`https://api.steampowered.com/ISteamApps/GetAppList/v2/`);
  return response.data.applist.apps;
});

const gameSlice = createSlice({
  name: 'games',
  initialState: {
    loading: false,
    games: [],
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload;
        state.error = '';
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.games = [];
        state.error = action.error.message;
      });
  }
});

export default gameSlice.reducer;
