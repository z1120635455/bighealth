// 对于axios函数库进行二次封装
import axios from 'axios';
import {ElMessage} from "element-plus";
import useUserStore from "@/store/modules/user";
const request = axios.create({
    baseURL: '/api',
    timeout: 5000,
})

request.interceptors.request.use((config)=>{
    let userStore = useUserStore();
    if (userStore.userInfo.token) {
        config.headers.token = userStore.userInfo.token;
    }
    return config;
})

request.interceptors.response.use((response)=>{
    return response.data;
}, (error)=>{
    let status = error.response.status;
    switch (status) {
        case 404:
            ElMessage({
                type: 'error',
                message: error.message
            })
            break;
        case 500|501|502|503|504:
            ElMessage({
                type: 'error',
                message: '服务器错误！'
            })
            break;
        case 401:
            ElMessage({
                type: 'error',
                message: '参数有误'
            })
            break;
    }
    return Promise.reject(new Error(error.message))
})

export default request;