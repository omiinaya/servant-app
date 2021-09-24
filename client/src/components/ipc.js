import axios from 'axios'

export const getCurrencies = () => {
    var url = '/api/currencies/all'
    return axios
        .get(url)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}