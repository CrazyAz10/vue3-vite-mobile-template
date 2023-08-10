
import request from '@/service/index'
interface loginReqType {
    code?: string,
    password?: string,
    phone: string
}
interface modifyPasswordDataType {
  "code": string,
  "loginWay": number,
  "password": string,
  "phone": string
}

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
    url: '/common/upload',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
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

// 获取用户信息
export function getUserData() {
  return request.post({
    url: '/user/user/getUserData'
  })
}

// 修改密码
export function modifyPassword(data: modifyPasswordDataType) {
  return request.post({
    url: '/user/user/modifyPassword',
    data: data,
  })
}