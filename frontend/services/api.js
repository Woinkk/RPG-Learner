import axios from 'axios';
axios.defaults.withCredentials = true;
const SERVER_URL = 'http://localhost:3000';

function login (logProp) {
  return axios.post(`${SERVER_URL}/login`, logProp)
    .then(response => response.status);
}

function myClasses (content) {
  return axios.post(`${SERVER_URL}/myClasses`, content)
    .then(response => response.data);
}

function otherClasses (content) {
  return axios.post(`${SERVER_URL}/otherClasses`, content)
    .then(response => response.data);
}

function createClassVClass (ClassVClass) {
  return axios.post(`${SERVER_URL}/ClassVClass`, ClassVClass)
    .then(response => response.status);
}

function MyQuizz (content) {
  return axios.post(`${SERVER_URL}/myQuizz`, content)
    .then(response => response.data);
}

export {
  login,
  myClasses,
  otherClasses,
  createClassVClass,
  MyQuizz
}
;
