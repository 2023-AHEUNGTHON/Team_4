import axios from './config';
import tokenConfig from './headerConfig';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  postScrap(data) {
    return axios.post('posts', data,tokenConfig('form'));
  },
  getScrap(data, postId) {
    return axios.get(`posts/${postId}`, data, tokenConfig());
  },
  putScrap(data, postId) {
    return axios.post(`posts/${postId}`, data, tokenConfig());
  },
  deleteScrap(data, postId) {
    return axios.post(`posts/${postId}`, data, tokenConfig());
  },
};
