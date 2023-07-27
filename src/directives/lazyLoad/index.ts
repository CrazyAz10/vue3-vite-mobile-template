const defaultImg = import('@/assets/images/bad-load.png')
// 自定义指令
const lazyLoad = {
  // vue2.0监听使用指令的DOM是否创建好，钩子函数: inserted
  // vue3.0 的指令拥有的钩子函数和组件的一样，使用指令的DON是否创建好，钩子函数: mounted,onMounted是在组合API时候使用，现在是选项
  mounted(el: any, binding: any) {
    // 绑定的元素，绑定的值
    // 2.创建一个观察对象，来观察当前使用指令得元素
    const observe = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 如果进入了可视区
          // 谁进入了可视区？得用observe去观察 是哪个元素使用了该指令，所以会传入dom对象el
          // 停止观察，因为观察一次就够了
          observe.unobserve(el)
          // console.log(binding.value, el) // binding.value就是绑定的地址
          // 3.监听图片加载失败，用默认图
          el.onerror = () => {
            el.src = defaultImg
          }
          // 4.将指令v-lazyLoad上的地址设置给el的src属性
          el.src = binding.value
        }
      },
      {
        threshold: 0 //进入到可视区交界就开始观察
      }
    )
    observe.observe(el) // 使用observe上的observe方法观察这个dom元素
  }
}
export default lazyLoad
