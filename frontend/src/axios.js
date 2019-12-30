import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}:3000/api/`
})

export default axiosInstance
