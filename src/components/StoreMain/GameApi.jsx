import axios from 'axios';

const key = 'cb6e513d181149ba97231f7307069426';
const axiosCreate = axios.create({
  baseURL: 'https://api.rawg.io/api'
});

const getGenreList = axiosCreate.get('/genres?key=' + key);

export default {
  getGenreList
};
