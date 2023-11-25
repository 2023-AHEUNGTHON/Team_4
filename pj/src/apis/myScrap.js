import axios from './config';
import tokenConfig from './headerConfig';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getMyScrap(category,page,tag) {
    return axios.get(`my/${category}/posts?tag=${tag}&page=0`,tokenConfig());
  },
  getSearchScrap(queries) {
    return axios.get(`my/posts`, queries, tokenConfig());
  },
};
