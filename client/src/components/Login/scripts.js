import axios from 'axios';

export const login = user => {
    return axios
        .post('/api/users/login', {
            username: user.username,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log("test" + err)
        })
}