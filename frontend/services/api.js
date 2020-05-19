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

function SavingClassVClass (content) {
  return axios.post(`${SERVER_URL}/SavingClassVClass`, content)
    .then(response => response.status);
}

function deleteClassVClass (content) {
  return axios.post(`${SERVER_URL}/deleteClassVClass`, content)
    .then(response => response.status);
}

function myClassVClass (content) {
  return axios.post(`${SERVER_URL}/myClassVClass`, content)
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
  return axios.put(`${SERVER_URL}/createSubject`, {subject: subject})
  .then(response => response.data);
}

function getMatiere () {
  return axios.get(`${SERVER_URL}/getMatiere`)
  .then(response => response.data);
}

function getSubject () {
  return axios.get(`${SERVER_URL}/getSubject`)
  .then(response => response.data);
}

function createQuizz (completeQuizz) {
  return axios.put(`${SERVER_URL}/createQuizz`, completeQuizz)
  .then(response => response.data);
}

function getQuizz() {
  return axios.get(`${SERVER_URL}/getQuizz`)
  .then(response => response.data);
}

function getQuizzByIdToModify(quizzId) {
  return axios.get(`${SERVER_URL}/getQuizz/${quizzId}`)
  .then(response => response.data);
}

function modifyQuizz(quizzId, Quizz) {
  return axios.put(`${SERVER_URL}/modifyQuizz/${quizzId}`, Quizz)
}

function deleteQuizz(quizzId) {
  return axios.delete(`${SERVER_URL}/deleteQuizz/${quizzId}`)
}

export {
  login,
  insertAccountNewStudent,
  myClasses,
  otherClasses,
  createSubject,
  getMatiere,
  getSubject,
  createClassVClass,
  MyQuizz,
  createQuizz,
  getQuizz,
  AllQuizz,
  GetNmbQuestionsByQuizz,
  GetSubjectByQuizz,
  deleteQuizz,
  getQuizzByIdToModify,
  modifyQuizz
  SavingClassVClass,
  myClassVClass,
  deleteClassVClass
};


