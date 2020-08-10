

import axios from 'axios'
import { Message } from 'element-ui'
import Cookies from 'js-cookie'
import qs from 'qs'


import Axios from 'axios';

Axios.defaults.withCredentials = true;

const env = !process.env.NODE_ENV ? 'dev' : process.env.NODE_ENV;

const baseURL = '//' + location.host;

// /**
// * @name getRequest
// * @class
// * @classdesc GET请求方法封装
// * @namespace
// * @param  {string} url - 请求URL
// * @param  {object} options - 请求的配置，用于覆盖默认配置
// * @param  {object} data - 请求参数
// * @param  {this} context - 请求上下文
// */

// const getRequest = async (url, options, data, context) => {
//     return new Promise((resolve, reject) => {
//         const option = {
//             url: baseURL + url,
//             method: 'get',
//             params: data,
//             timeout: defaultTimeout,
//             headers: {
//                 'Content-Type': 'text/plain;charset=UTF-8'
//             },
//             withCredentials: true
//         }
//         Object.assign(option, options)

//         Axios(option).then(res => {
//             // console.log(res.status, res.statusText)
//             if (res.status.toString() === '200' || res.status.toString() == '302') {
//                 if (res.data.stateCode.toString() === '4000') {
//                     const sso = res.data.url
//                     const cur = window.location.href
//                     window.location.href = `${sso}${cur}`;
//                 }
//                 resolve(res.data)
//             } else if (res.status.toString() === '201') {
//                 resolve(res.data)
//             } else {
//                 reject({
//                     "resCode": "000001",
//                     "msg": "请求失败",
//                 })
//             }
//         }).catch(error => {
//             reject(error);
//         });
//     });
// }

// // /**
// //  * @name postRequest
// //  * @class
// //  * @classdesc POST请求方法封装
// //  * @namespace
// //  * @param  {string} url - 请求URL
// //  * @param  {object} options - 请求的配置，用于覆盖默认配置
// //  * @param  {object} data - 请求参数
// //  * @param  {this} context - 请求上下文
// //  */

// const postRequest = async (url, options, data, context) => {
//     return new Promise((resolve, reject) => {
//         const option = {
//             url: baseURL + url,
//             method: 'post',
//             data: data,
//             timeout: defaultTimeout,
//             withCredentials: true,
//             headers: {
//                 'Content-Type': 'application/json;charset=UTF-8'
//             }
//         }
//         Object.assign(option, options)
//         Axios(option).then(res => {
//             // console.log(res.status, res.statusText)
//             if (res.status.toString() === '200' || res.status.toString() == '302') {

//                 if (res.data.stateCode.toString() === '4000') {
//                     const sso = res.data.url
//                     const cur = window.location.href
//                     window.location.href = `${sso}${cur}`;
//                 }

//                 resolve(res.data)
//             } else if (res.status.toString() === '201') {
//                 resolve(res.data)
//             } else {
//                 reject({
//                     "resCode": "000001",
//                     "msg": "请求失败",
//                 });
//             }
//         }).catch(error => {
//             reject(error);
//         });
//     });
// }


// export default {
//     getRequest,
//     postRequest,
// };

