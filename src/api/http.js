import axios from "axios";
const http = axios.create({baseURL:'https://cnodejs.org/api/v1', timeout: 30 * 1000})

http.interceptors.request.use((config) => {
    return config
})

http.interceptors.response.use((res) => {
    return res.data
}, (error) => {
    return Promise.reject(error)
})

export default http