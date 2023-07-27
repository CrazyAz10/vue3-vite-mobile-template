const BASE_URL: string = import.meta.env.VITE_APP_API_URL
const TIMEOUT = 10000
  
// if (import.meta.env.NODE_ENV === 'development') {
//     BASE_URL = import.meta.env.VITE_APP_API_URL
// } else if (import.meta.env.NODE_ENV === 'production') {
//     BASE_URL = import.meta.env.VITE_APP_API_URL
// } else {
//     BASE_URL = import.meta.env.VITE_APP_API_URL
// }
export { BASE_URL, TIMEOUT }