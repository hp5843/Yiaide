import axios from 'axios'
// import { ElMessage } from 'element-plus';

// // 1. 创建axios实例
const request = axios.create({
  baseURL: 'https://xkx.sokl.cn',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    aid: 10006,
    deviceid: "989bbd57-e784-408e-8eb3-c5556b565744",
  }
})


// // 2. 请求拦截器
// request.interceptors.request.use(
//   config => {
//     // 添加token到请求头
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )



// // 3. 响应拦截器
// request.interceptors.response.use(
//   response => {
//     // 处理成功响应
//     if (response.data.code === 200) {
//       return response.data
//     } else if (response.data.code === 0) {
//         ElMessage.warning(response.data.msg)
//         return response.data
//     } else {
//       ElMessage.error(response.data.message || '请求失败')
//       return Promise.reject(response.data)
//     }
//   },
//   error => {
//     // 处理错误响应
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           ElMessage.error('未授权，请登录')
//           break
//         case 403:
//           ElMessage.error('拒绝访问')
//           break
//         case 404:
//           ElMessage.error('请求资源不存在')
//           break
//         case 500:
//           ElMessage.error('服务器错误')
//           break
//         default:
//           ElMessage.error(error.response.data.message || '请求失败')
//       }
//     } else {
//       ElMessage.error('网络连接失败')
//     }
//     return Promise.reject(error)
//   }
// )





export { request }


