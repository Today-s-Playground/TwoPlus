import axios from 'axios';

const key = 'cb6e513d181149ba97231f7307069426';
const axiosCreate = axios.create({
  baseURL: 'https://api.rawg.io/api'
});

const getGenreList = () => axiosCreate.get('/genres?key=' + key);
const getAllGames = () => axiosCreate.get('/games?key=' + key);
const getGameListByGenreId = (id) => axiosCreate.get('/games?key=' + key + '&genres=' + id);
const getGameById = (id) => axiosCreate.get('/games/' + id + '?key=' + key);
const getGameScreenshots = (id) => axiosCreate.get('/games/' + id + '/screenshots?key=' + key);
const getGamePrice = (id) => axiosCreate.get('/games/' + id + '/marketplace?key=' + key);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
  getGameById,
  getGameScreenshots,
  getGamePrice
};
