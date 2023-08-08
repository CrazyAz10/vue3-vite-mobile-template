
import request from '@/service/index'
interface loginReqType {
    code?: string,
    password?: string,
    phone: string
}
// interface testDataType {
//     code: string,
//     loginWay: number,
//     password: string,
//     phone: string
// }

// 登录
export function login(data: loginReqType) {
  return request.post({
    url: '/user/login',
    data: data,
  })
}

// 注册
export function register(data: any) {
  return request.post({
    url: '/user/register',
    data: data,
  })
}

// 上传头像
export function uploadFile(data: any) {
  return request.post({
    url: '/user/register',
    data: data,
  })
}

// 保存用户修改信息
export function updateUserData(data: any) {
  return request.post({
    url: '/user/user/updateUserData',
    data: data,
  })
}