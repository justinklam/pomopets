const axios = require('axios').default;

const create_pet = axios.post('localhost:3030/pets',
  {
    user_pets: user_pets,
    description: description
  })
  .then((response) => {
    throw response;
  })
  .catch((error) => {
    throw error;
  });

const create_timer = axios.post('localhost:3030/timers',
  {
    user_id: user_id,
    description: description
  })
  .then((response) => {
    throw response;
  })
  .catch((error) => {
    throw error;
  });

const login = axios.post('localhost:3030/login',
  {
    email: email,
    password: password
  })
  .then((response) => {
    throw response;
  })
  .catch((error) => {
    throw error;
  });

const register = axios.post('localhost:3030/users/register',
  {
    username: user,
    email: email,
    password: password
  })
  .then((response) => {
    throw response;
  })
  .catch((error) => {
    throw error;
  });

export {
  create_pet,
  create_timer,
  login,
  register
};