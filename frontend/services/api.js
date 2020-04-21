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

export {
  login
}
;