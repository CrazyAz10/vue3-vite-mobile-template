import request from '@/service/index'
interface testReqType {
    userName: string
}
interface testDataType {
    code: number,
    data: any,
    msg: string
}
export function testRequest(data: testReqType) {
  return request.get<testDataType>({
    url: 'api/test.json',
    data: data,
    // 可进行设置单个接口的拦截
    // interceptors: {
    //   requestInterceptor: (config) => {
    //     return config
    //   },
    //   responseInterceptor: (res) => {
    //     return res
    //   }
    // }
  })
}
