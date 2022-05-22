import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:3001/`,
});

export const UsersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?_page=${currentPage}&_limit=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.get(`users/${userId}`);
  },
  unfollow(userId) {
    return instance.get(`users/${userId}`);
  },
};
