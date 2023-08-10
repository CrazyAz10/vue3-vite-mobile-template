import router from "@/router"
// 路由跳转
export const linkTo = function (to:any, replace?: boolean) {
    if (replace) {
        router.replace(to)
    } else{
        router.push(to)
    }
}
