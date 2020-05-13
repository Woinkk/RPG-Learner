const SERVER_URL = 'http://localhost:3000';

function login (logProp) {
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

export {
  login,
  createSubject,
  getMatiere,
  getSubject,
}
;