const axios = require('axios');


const functions = {
    //addition
    add: (num1, num2) => num1 + num2,

    //working with async
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')

}

module.exports = functions