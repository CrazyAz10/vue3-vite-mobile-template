import { ZRequest } from './request'  
import { BASE_URL, TIMEOUT } from './request/config'
const zqRequest = new ZRequest({  
    baseURL: BASE_URL,  
    timeout: TIMEOUT,  
    interceptors: {  
        requestInterceptor: (config) => {  
            // const token = localCache.getCache('token')  
            const token = localStorage.getItem('token')
            if (token) {  
                if (config && config.headers) {  
                    config.headers.Authorization = `Bearer ${token}`  
                }  
            }  
            return config  
        },  
        requestInterceptorCatch: (err) => {  
            console.log(err)  
            return err  
        },  
        responseInterceptor: (config) => {  
            return config  
        },  
        responseInterceptorCatch: (err) => {  
            console.log(err)  
            return err  
        }  
    }  
})  
export default zqRequest