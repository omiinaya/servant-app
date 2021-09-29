export const createRequest = newRequest => {
    var url = '/api/users/register'
    return axios
    .post(url, {
        //change to match request
        firstname: newRequest.firstname,
        lastname: newRequest.lastname,
        email: newRequest.email,
        birthdate: newRequest.birthdate,
        username: newRequest.username,
        password: newRequest.password
    })
    .then(res => {
        console.log("Request has been posted.")
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}