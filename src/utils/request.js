import axios from 'axios';
const service=axios.create({
    baseURL:'http://localhost:8080',
    withCredentials:true,
})
// 可以进行响应拦截等操作
export {service as axios,service as axios1}