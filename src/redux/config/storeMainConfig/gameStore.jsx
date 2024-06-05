// src/redux/slices/store.js

import { configureStore } from '@reduxjs/toolkit';
import { SET_GAMES } from '../../slices/storeMainSlice/gameSlice';

// 초기 상태 설정
const initialState = {
  games: []
};

// 리듀서 설정
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES:
      return {
        ...state,
        games: action.payload
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = configureStore({
  reducer: reducer
});

export default store;
