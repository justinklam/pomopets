const axios = require('axios').default;

const createPets = (name, userId) => {
  // const {name} = pet;
  // console.log('createPetName', name);
  console.log('name', name, 'userId', userId)
  return axios.post('//localhost:3030/pets',
  {
    name,
    userId
  })
};

// const create_timer = axios.post('/localhost:3030/timers',
//   {
//     user_id: user_id,
//     description: description
//   })
//   .then((response) => {
//     throw response;
//   })
//   .catch((error) => {
//     throw error;
//   });

const login = (user) => {
  const {email, password} = user;
  // console.log('email', email, 'password', password)
  return axios.post('//localhost:3030/login',
  {
    email: email,
    password: password
  })
};

const logout = () => {
  // console.log('email', email, 'password', password)
  return axios.post('//localhost:3030/logout')
};

const register = (user) => {
  const {username, email, password} = user;
  // console.log('email', email, 'password', password)
  return axios.post('//localhost:3030/users/register',
  {
    username: username,
    email: email,
    password: password
  })
};

export {
  createPets,
  // create_timer,
  login,
  logout,
  register
};