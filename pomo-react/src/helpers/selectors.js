const axios = require('axios');

const createPets = (pet) => {
  const {name} = pet;
  // console.log('email', email, 'password', password)
  return axios.post('//localhost:3030/pets',
  {
    name: name,
  })
};

// const getPets = axios.get('/localhost:3030/pets', {
//   params: {
//     id: id
//   }
// })
// .then(function (response) {
//   // handle success
//   throw response
// })
// .catch(function (error) {
//   // handle error
//   throw error;
// })
// .then(function () {
//   // always executed
// });

// const getTimers = axios.get('/localhost:3030/get_timers', {
//   params: {
//     id: id
//   }
// })
// .then(function (response) {
//   // handle success
//   throw response;
// })
// .catch(function (error) {
//   // handle error
//   throw error;
// })
// .then(function () {
//   // always executed
// });


export {
  createPets,
  // getPets,
  // getTimers
};