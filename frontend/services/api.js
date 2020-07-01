import axios from 'axios';
axios.defaults.withCredentials = true;
const SERVER_URL = 'http://localhost:3000';

function login(logProp) {
  return axios.post(`${SERVER_URL}/login`, logProp)
    .then(response => response);
}
function modifyAccount(modifyProp) {
  return axios.put(`${SERVER_URL}/account`, modifyProp)
    .then(response => response.status)
}
function logout() {
  return axios.delete(`${SERVER_URL}/logout`)
    .then(response => response.status);
}

function myClasses(content) {
  return axios.post(`${SERVER_URL}/myClasses`, content)
    .then(response => response.data);
}

function otherClasses(content) {
  return axios.post(`${SERVER_URL}/otherClasses`, content)
    .then(response => response.data);
}

function createClassVClass(ClassVClass) {
  return axios.post(`${SERVER_URL}/ClassVClass`, ClassVClass)
    .then(response => response.status);
}

function AllQuizz(content) {
  return axios.post(`${SERVER_URL}/allQuizz`, content)
    .then(response => response.data);
}

function GetNmbQuestionsByQuizz(content) {
  return axios.post(`${SERVER_URL}/NmbQueByQui`, content)
    .then(response => response.data);
}

function GetSubjectByQuizz(content) {
  return axios.post(`${SERVER_URL}/SubjectByQuizz`, content)
    .then(response => response.data);
}

function SavingClassVClass(content) {
  return axios.post(`${SERVER_URL}/SavingClassVClass`, content)
    .then(response => response.status);
}

function deleteClassVClass(content) {
  return axios.post(`${SERVER_URL}/deleteClassVClass`, content)
    .then(response => response.status);
}

function myClassVClass(content) {
  return axios.post(`${SERVER_URL}/myClassVClass`, content)
    .then(response => response.data);
}

function insertAccountNewStudent(newStudent) {
  return axios.put(`${SERVER_URL}/createNewStudent`, newStudent)
    .then(response => response.status)

}

function insertAccountNewTeacher(newTeacher) {
  return axios.put(`${SERVER_URL}/createNewTeacher`, newTeacher)
    .then(response => response.status)
}

function createSubject(subject) {
  return axios.put(`${SERVER_URL}/createSubject`, { subject: subject })
    .then(response => response);
}

function getMatiere() {
  return axios.get(`${SERVER_URL}/getMatiere`)
    .then(response => response.data);
}

function getSubject() {
  return axios.get(`${SERVER_URL}/getSubject`)
    .then(response => response.data);
}

function myClassVClassSpecific() {
  return axios.post(`${SERVER_URL}/myClassVClassSpecific`)
    .then(response => response.data);
}

function createQuizz(completeQuizz) {
  return axios.put(`${SERVER_URL}/createQuizz`, completeQuizz)
    .then(response => response);
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
function isConnected() {
  return axios.get(`${SERVER_URL}/who`)
    .then(response => response.data);
}

function editClassVClass(content) {
  return axios.post(`${SERVER_URL}/editClassVClass`, content)
    .then(response => response.status);
}

function classVClassLoader(content) {
  return axios.post(`${SERVER_URL}/classVClassLoader`, content)
    .then(response => response.data);
}

function GetQuizzById(content) {
  return axios.post(`${SERVER_URL}/GetQuizzById`, content)
    .then(response => response.data);
}

function GetFullQuizzById(idQuizz) {
  return axios.get(`${SERVER_URL}/GetFullQuizz/${idQuizz}`)
    .then(response => response.data)
}

function classesStudents(content) {
  return axios.post(`${SERVER_URL}/classesStudents`, content)
    .then(response => response.data);
}

function schoolTeachers(content){
   return axios.post(`${SERVER_URL}/schoolTeachers`, content)
  .then(response => response.data);
}
function statsStudent(content) {
  return axios.post(`${SERVER_URL}/statsStudent`, content)
    .then(response => response.data);
}

function useItem(itemName) {
  console.log(itemName)
  return axios.put(`${SERVER_URL}/useItem`,itemName)
    .then(response => response.data);
}
function inventory() {
  return axios.post(`${SERVER_URL}/inventory`)
    .then(response => response.data)
}

function addItem(content) {
  return axios.post(`${SERVER_URL}/addItem`,content)
    .then(response => response.data)
}

function savingCharacter(content) {
  return axios.post(`${SERVER_URL}/savingCharacter`,content)
    .then(response => response.data)
}

function skinPerso(content) {
  return axios.post(`${SERVER_URL}/skinPerso`,content)
    .then(response => response.data)
}

function getAllMatiere(){
  return axios.get(`${SERVER_URL}/getAllMatiere`)
    .then(response => response.data)
}

function getAllQuizzByTeacherAndClasses() {
  return axios.get(`${SERVER_URL}/getAllQuizzByTeacherAndClasses`)
    .then(response => response.data)
}

function sendResult(content) {
  return axios.put(`${SERVER_URL}/sendResult`, content)
    .then(response => response.data)
}

export {
  login,
  classVClassLoader,
  editClassVClass,
  insertAccountNewStudent,
  insertAccountNewTeacher,
  myClasses,
  otherClasses,
  createSubject,
  getMatiere,
  getAllMatiere,
  getSubject,
  createClassVClass,
  skinPerso,
  //MyQuizz,
  createQuizz,
  getQuizz,
  AllQuizz,
  schoolTeachers,
  GetNmbQuestionsByQuizz,
  GetSubjectByQuizz,
  deleteClassVClass,
  GetQuizzById,
  deleteQuizz,
  getQuizzByIdToModify,
  modifyQuizz,
  SavingClassVClass,
  myClassVClass,
  classesStudents,
  isConnected,
  myClassVClassSpecific,
  logout,
  modifyAccount,
  statsStudent,
  useItem,
  inventory,
  addItem,
  GetFullQuizzById,
  savingCharacter,
  getAllQuizzByTeacherAndClasses,
  sendResult,
};


