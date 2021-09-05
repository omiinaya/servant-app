import axios from 'axios';

export const login = user => {
    var url = '/api/users/login'
    console.log(user)
    return axios
        .post(url, {
            username: user.username,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}