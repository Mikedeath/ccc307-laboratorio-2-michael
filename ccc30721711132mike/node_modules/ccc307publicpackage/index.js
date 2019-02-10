var fetch = require('node-fetch');

makeUser = (appToken,userInfo) => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users%27)
               .then(response => response.json())
        .then(json=> resolve(json))
    })
};

module.exports = {
    makeUser
};
