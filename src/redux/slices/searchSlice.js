import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
  searchResults: []
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    }
  }
});

export const { setSearchInput, setSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
