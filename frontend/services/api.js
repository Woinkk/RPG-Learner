const SERVER_URL = 'http://localhost:3000';

function login(logProp) {
  var myInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(logProp)
  };
  // console.log(myInit.body)
  return fetch(`${SERVER_URL}/login`, myInit)
    .then(function (response) {
      console.log(response);
      console.log(response.status);
      return response.status;
    });
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
  insertAccountNewStudent
};


