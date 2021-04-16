import axios from 'axios'

const baseURL = 'http://localhost:9000'
const version = '/api/v1'

const instance = axios.create({
  baseURL: baseURL+version,
  timeout: 7000,
  headers: {}
})

instance.interceptors.request.use(function (config) {
  config.headers['Authorization'] = localStorage.getItem('token')
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  let res = null
  if(response && response.data) {
    if(response.data.err === 0) {
      res = response.data.data
    }else if(response.data.err === -1) {
      window.location.href = '/#/login'
    }else {
      console.log('业务逻辑错误')
    }
  }
  return res
}, function (error) {
  return Promise.reject(error)
})

export default instance
