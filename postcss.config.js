// 第二行注释：取消module的报错
// eslint-disable-next-line no-undef
module.exports = {
    plugins: {
        'postcss-pxtorem': {
            viewportWidth: 750,
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75;
              }, // 75表示750设计稿，37.5表示375设计稿
            unitPrecision: 6,
            propList: ["*"],
            minPixelValue: 2,
        }
    },
}