
import defaultAvatar from '@/assets/images/userPage/user-default-avatar.png'
export function getImage(pic:string) {
    if (!pic) {
        return defaultAvatar
    }
    return import.meta.env.VITE_APP_PIC_URL + pic
}