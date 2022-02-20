const axios = require('axios');

const getAllPets = (userId) =>
  axios.get('//localhost:3030/pets', {
  params: {
    id: userId
  }
})
.then(function (response) {
  // console.log('axios getPets', response);
  return response.data;
})
.catch(function (error) {
  throw error;
});

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
  getAllPets
  // getTimers
};