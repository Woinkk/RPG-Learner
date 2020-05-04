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

function myClasses (content) {
  var myInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  };
  return fetch(`${SERVER_URL}/home`, myInit)
    .then(function (response) {
      return response;
    });
}

export {
  login,
  myClasses
}
;
