import axios from 'axios';

export const login = user => {
    var base = 'http://localhost:5000'
    var url = base + '/api/users/login'
    console.log(user)
    console.log(url)
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
            console.log("test" + err)
        })
}