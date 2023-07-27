const copy = {
  //指令与元素成功绑定时（一上来）
  mounted(element: any, binding: any) {
    element.addEventListener('click', () => {
      if (binding.arg) {
        navigator.clipboard.writeText(binding.arg).then(() => {
          if (typeof binding.value === 'function') {
            binding.value()
          }
        })
      } else {
        navigator.clipboard.writeText(binding.value)
      }
    })
  }
}
export default copy
