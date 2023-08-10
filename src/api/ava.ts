
import request from '@/service/index'



// 登录
export function applyAdv(data: any) {
    return request.post({
      url: '/adv/advert/applyAdv',
      data: data,
    })
}