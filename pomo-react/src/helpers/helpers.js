const axios = require('axios').default;

const createPets = (name, userId, type) => {
  // const {name} = pet;
  // console.log('createPetName', name);
  console.log('name', name, 'userId', userId)
  return axios.post('//localhost:3030/pets',
  {
    name,
    userId,
    type
  })
};

const createTimer = (userId, description) => {
  // console.log('userId', userId, 'description', description);
  return axios.post('//localhost:3030/timers',
  {
    userId,
    description
  })
};

// const create_timer = axios.post('//localhost:3030/timers',
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

const updatePets = (userId) => {
  // console.log('email', email, 'password', password)
  return axios.post('//localhost:3030/pets/update',
  {
    userId: userId
  })
};

const updateUser = (userInfo, userId) => {
  const {username, email, password} = userInfo;
  return axios.post('//localhost:3030/users/update',
  {
    id: userId,
    username: username,
    email: email,
    password: password
  })
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
  createTimer,
  login,
  logout,
  updatePets,
  updateUser,
  register
};