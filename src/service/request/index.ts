import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ZRequestInterceptor, ZRequestConfig } from '@/service/request/type.d.ts'
export class ZRequest {
  instance: AxiosInstance // axios实例
  interceptor?: ZRequestInterceptor // 拦截
  constructor(config: ZRequestConfig) {
    this.instance = axios.create(config)
    this.interceptor = config.interceptors
    // 在这里可以传入自定义拦截
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseInterceptorCatch
    )
    // 在此可以设置通用拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        if (res.data.code !== 200) {
          // 接口返回提示
          console.log(res.data.msg)
        }
        return res.data
      },
      (err) => {
        console.log(err.response)
        if (err.response.state === 404) {
          console.log('接口未找到')
        }
        return err
      }
    )
  }
  request<T>(config: ZRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //单个请求的请求拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //单个请求的响应拦截
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  post<T>(config: ZRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  get<T>(config: ZRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
}
