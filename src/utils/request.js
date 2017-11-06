import { AsyncStorage } from 'react-native';
import axios from 'axios';
/**
 * Request client for api
 */

/**
 * API URL Definition
 */

// const baseUrl = 'https://admin.testforward.com';
const baseURL = 'https://apidev.testforward.com';

const apiClient = axios.create({
  baseURL,
  timeout: 30000
});

apiClient.defaults.headers.post['Content-Type'] = 'application/json';
apiClient.defaults.headers.put['Content-Type'] = 'application/json';

/**
 * Function to set headers
 * @param {object} config object from axios
 */
export function setOutgoingHeaders(config) {
  // if (token) {
  //   config.headers.Authorization = decodeURIComponent(token); //eslint-disable-line
  // }
  // if (uuid) {
  //   config.headers.uuid = uuid; //eslint-disable-line
  // }
  config.transformRequest = [function transformer(data) { //eslint-disable-line
    if (!data) {
      return data;
    }
    return JSON.stringify(data.data);
  }];
  return config;
}

export function setIncomingHeaders({ data, headers, status }) {
  if (headers.authorization) {
    AsyncStorage.setItem('@Grand:token', headers.authorization);
  }

  if (headers.uuid) {
    AsyncStorage.setItem('uuid', headers.uuid);
  }

  return { data, status };
}

export function handleRequestError({ response }) {
  return Promise.reject(response);
}

// apiClient.interceptors.request.use(setOutgoingHeaders, handleRequestError);
apiClient.interceptors.response.use(setIncomingHeaders, handleRequestError);
export default apiClient;
