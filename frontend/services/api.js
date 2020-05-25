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

function AllQuizz (content) {
  return axios.post(`${SERVER_URL}/allQuizz`, content)
    .then(response => response.data);
}

function GetNmbQuestionsByQuizz (content) {
  return axios.post(`${SERVER_URL}/NmbQueByQui`, content)
    .then(response => response.data);
}

function GetSubjectByQuizz (content) {
  return axios.post(`${SERVER_URL}/SubjectByQuizz`, content)
    .then(response => response.data);
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

function createSubject (subject) {
  var myInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({subject: subject})
  }

  console.log(myInit.body);

  return fetch(`${SERVER_URL}/createSubject`, myInit)
}

function getMatiere () {
  var myInit = {
    method: 'GET'
  }

  return fetch(`${SERVER_URL}/getMatiere`, myInit)
  .then(response => response.json()).then(data => {
    return data
  })
}

function getSubject () {
  var myInit = {
    method: 'GET'
  }

  return fetch(`${SERVER_URL}/getSubject`, myInit)
  .then(response => response.json()).then(data => {
    return data
  })
}

function editClassVClass (content) {
  return axios.post(`${SERVER_URL}/editClassVClass`, content)
    .then(response => response.status);
}

function classVClassLoader (content) {
  return axios.post(`${SERVER_URL}/classVClassLoader`, content)
    .then(response => response.data);
}

function GetQuizzById (content) {
  return axios.post(`${SERVER_URL}/GetQuizzById`, content)
    .then(response => response.data);
}

export {
  login,
  classVClassLoader,
  editClassVClass,
  insertAccountNewStudent,
  myClasses,
  otherClasses,
  createSubject,
  getMatiere,
  getSubject,
  createClassVClass,
  AllQuizz,
  GetNmbQuestionsByQuizz,
  GetSubjectByQuizz,
  deleteClassVClass,
  GetQuizzById
};


