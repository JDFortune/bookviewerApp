import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/'

export const getToc = () => {
  return axios
    .get(baseUrl + 'toc')
    .then(response => response.data);
}

export const getChapter = (chapterPath: string) => {
  return axios
    .get(baseUrl + chapterPath)
    .then(response => response.data);
}

export default {
  getToc,
  getChapter
}