# vue-project

这个模板应该可以帮助您开始在 Vite 中使用 Vue 3 进行开发。

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript 默认情况下无法处理“.vue”导入的类型信息，因此我们将“tsc”CLI 替换为“vue-tsc”进行类型检查。在编辑器中，我们需要[TypeScript Vue 插件（Volar）](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript vue 插件），以使 typescript 语言服务知道`.vue`类型。

如果你觉得独立的 TypeScript 插件不够快，Volar 还实现了[接管模式](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669）更具性能。您可以通过以下步骤启用它：

1.禁用内置的 TypeScript 扩展

1） 从 VSCode 的命令调色板运行“扩展：U 显示内置扩展”

2） 查找“TypeScript 和 JavaScript 语言功能”，右键单击并选择“禁用（工作区）”`

2.通过从命令调色板运行“Developer:重新加载窗口”来重新加载 VSCode 窗口。

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### 项目说明

    基础vue3 + vite 移动端解决方案框架
        i18n 国际化语言切换功能
        主题色切换功能
        自适应750px范围内终端

#### 目录结果说明

    public 服务端根目录资源
    src
        -api api 接口目录 复合函数
        -assets 静态资源
            -fonts 字体资源
                -iconfont 字体图标库
        -components 框架基础组件库
        -directives 指令库
        -i18n 国际化配置
        -layout 框架基础结构布局组件
        -plugins 插件
        -router 路由配置
        -stores pinia 状态管理
        -styles 全局样式库/主题库配置
        -utils 第三方/自定义复合函数工具
        -views 视图页面目录

#### 规范说明

    所有引入vue组件目录路径必须包含后缀名

#### 依赖

    pinia >> 状态管理
    register-service-worker >> 离线缓存
    src/utils/rem.ts >> 移动端适配解决方案
    axios >> 网络请求库
    postcss-pxtorem >> 自动将px转换成rem单位
    
### vsCode 插件使用

    SELint
    Prettier-Code formatter
    Vue Language Features(Volar)
