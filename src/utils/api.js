import api from './request';

export default function apiHelper(method, endpoint, ...rest) {
  return api[method](endpoint, ...rest)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
      // const { status } = error;
      // if (status === 403) {
      //   console.log('Your session has expired');
      // }
      throw error;
    });
}

