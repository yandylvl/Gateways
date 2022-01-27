import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  //TODO: use a logger
  if (!expectedErrors)
    console.log(
      "A unexpected error occurred, handle it using a logger (sentry.io)"
    );

  return Promise.reject(error);
});

const request = {
  request: axios.request,
};

export default request;
