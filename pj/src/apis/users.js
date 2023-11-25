import axios from './config';
import tokenConfig from './headerConfig';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  join(data) {
    return axios.post('users/join', data);
  },
  login(data) {
    return axios.post('users/login', data);
  },
  refreshToken(data) {
    return axios.post('users/refresh', data, tokenConfig());
  },
  updateNickName(data) {
    return axios.put('users/updateNickName', data, tokenConfig());
  },
  updateProfileImg(data) {
    return axios.put('users/updateProfileImg', data, tokenConfig('form'));
  },
  getUserInfo(data) {
    return axios.get('users/info', data, tokenConfig());
  },
};
