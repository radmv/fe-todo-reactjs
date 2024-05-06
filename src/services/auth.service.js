import axios from "axios";

export const register = (data, callback = () => {}) => {
  axios
    .post(`http://localhost:8000/api/register`, data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const login = (data, callback = () => {}) => {
  axios
    .post(`http://localhost:8000/api/login`, data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const logout = () => {
  localStorage.clear();
};
