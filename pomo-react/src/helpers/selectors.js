const axios = require('axios');

const get_pets = axios.get('/localhost:3030/pets', {
  params: {
    id: id
  }
})
.then(function (response) {
  // handle success
  throw response
})
.catch(function (error) {
  // handle error
  throw error;
})
.then(function () {
  // always executed
});

const get_timers = axios.get('/localhost:3030/get_timers', {
  params: {
    id: id
  }
})
.then(function (response) {
  // handle success
  throw response;
})
.catch(function (error) {
  // handle error
  throw error;
})
.then(function () {
  // always executed
});



export {
  get_pets,
  get_timers
};