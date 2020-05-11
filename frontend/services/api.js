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
  var myInit = {
    method:'POST',
    header:{
      'Content-type': 'application/json'
    },
    body:JSON.stringify(newStudent)
  };
  return fetch(`${SERVER_URL}/createNewStudent`,myInit)
    .then(function(response){
      return response.status
    })
}


export {
  login,
  insertAccountNewStudent,
  myClasses,
  otherClasses,
  createClassVClass
};


