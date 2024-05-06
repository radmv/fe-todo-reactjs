import axios from "axios";

export const getUserTodo = (token, callback = () => {}) => {
  axios
    .get(`http://localhost:8000/api/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const addTodo = (data, token, callback = () => {}) => {
  axios
    .post(`http://localhost:8000/api/todos`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const editTodo = (data, token, callback = () => {}) => {
  axios
    .put(
      `http://localhost:8000/api/todos/${data.id}`,
      { name: data.name, status: data.status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const deleteTodo = (data, token, callback = () => {}) => {
  axios
    .delete(`http://localhost:8000/api/todos/${data.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};
