const axios = require('axios');

const getAllPets = (userId) =>
  axios.get('//localhost:3030/pets', {
  params: {
    id: userId
  }
})
.then(function (response) {
  return response.data;
})
.catch(function (error) {
  throw error;
});

// const getAllTimers = axios.get('//localhost:3030/timers', {
//   params: {
//     id: userId
//   }
// })
// .then(function (response) {
//   return response.data;
// })
// .catch(function (error) {
//   throw error;
// });


export {
  getAllPets,
  // getAllTimers
};