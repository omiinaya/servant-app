import axios from 'axios';

export function isUser(a) {
    var url = '/api/users'
    return axios
    .get(url + "/" + a)
    .then(function (res) {
        return res.data;
    })
}

export function passwordsMatch(a, b) {
    if (a === b) {
        return true
    } else {
        return false
    }
}

export const register = newUser => {
    var url = '/api/users/register'
    return axios
    .post(url, {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        birthdate: newUser.birthdate,
        username: newUser.username,
        password: newUser.password
    })
    .then(res => {
        console.log("User has been egistered.")
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}