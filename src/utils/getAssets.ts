
export function getImage(pic:string) {
    console.log(pic)
    return import.meta.env.PIC_URL + pic
}