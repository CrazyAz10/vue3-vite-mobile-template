// 验证手机号码
export function isPhoneNumber(telephone: string) {
    const reg = /^1[0-9]{10}$/
    return reg.test(telephone)
}

// 验证密码 至少需要(大小写字母+数字 且在6-18个字符范围)可通过验证；也可由大小写字母+数字+特殊字符三种字符混合组成
export function verifyPassword(password: string) {
    const reg = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[\da-zA-Z\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]{6,16}$/
    return reg.test(password)
}