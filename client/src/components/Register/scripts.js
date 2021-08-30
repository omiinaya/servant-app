import axios from 'axios';
var base = 'http://localhost:5000'

export function isUser(a) {
    var url = base + '/api/users/'
    return axios
    .get(url + a)
    .then(function (res) {
        return res.data;
    })
}

export const register = newUser => {
    var url = base + '/api/users/register'
    return axios
    .post(url, {
        username: newUser.username,
        password: newUser.password
    })
    .then(res => {
        console.log("User has been egistered.")
        return res.data
    })
}