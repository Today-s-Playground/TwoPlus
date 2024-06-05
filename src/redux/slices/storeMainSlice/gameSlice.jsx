// src/redux/slices/actions.js

// 액션 타입 정의
export const SET_GAMES = 'SET_GAMES';

// 액션 크리에이터 정의
export const setGames = (games) => ({
  type: SET_GAMES,
  payload: games
});
