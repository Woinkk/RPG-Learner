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

function insertAccountNewStudent(newStudent) {
  return axios.put(`${SERVER_URL}/createNewStudent`,newStudent)
    .then(response => response.status)
    
}

function isConnected(){
  return axios.post(`${SERVER_URL}`)
    .then(response=>response.data)
  
}

export {
  login,
  insertAccountNewStudent,
  myClasses,
  otherClasses,
  createClassVClass,
  isConnected
};


