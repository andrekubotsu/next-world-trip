import axios from 'axios'

const api = axios.create({
    baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
    headers: {
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'x-rapidapi-key': '21083989c5msh928050efc10ad7fp1c111fjsnc0486a1a70e2'
    }
})

export default api;