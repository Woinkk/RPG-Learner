const SERVER_URL ="http://localhost:3000"


function login(logProp){
    var myInit={
        method:'POST',
        header:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(logProp)
    }
    return fetch(`${SERVER_URL}/login`,myInit)
}

export{
    login
}