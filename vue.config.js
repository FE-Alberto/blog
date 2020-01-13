// vue.config.js
const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    pages: {
        index: {
            entry: "client/main.js"
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('client'))
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    lintOnSave: process.env.NODE_ENV !== 'production'
}