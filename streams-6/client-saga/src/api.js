import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

const initialize = function() {
  console.log("call initialize")
  axios.interceptors.request.use(function (config) {
    config = checkAndAddTokenToHeader(config);

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    console.log("AXIOS response")
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
};

const checkAndAddTokenToHeader = (config) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const token = localStorage.getItem("token");
  if(isLoggedIn && token){
    config.headers['X-CSRF-Token'] = token;
  }

  return config;
};

initialize();

export default axios;
