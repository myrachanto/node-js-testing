const axios = require('axios')
const test1  = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser : () => {
        const user = {
            firstname : 'antonio'
        }
        user['lastname'] = 'myracho'
        return user
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => err)
}


module.exports = test1