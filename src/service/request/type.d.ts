import type { AxiosRequestConfig, AxiosResponse } from 'axios'  
  
export interface ZRequestInterceptor<T = AxiosResponse> {  
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorCatch?: (err: any) => any  
    responseInterceptor?: (config: T) => T  
    responseInterceptorCatch?: (err: any) => any  
}  
export interface ZRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {  
interceptors?: ZRequestInterceptor<T>  
}