// 导入处理路径的模块
var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 项目入口文件
    output: { // 配置输出选项
        path: path.join(__dirname, './dist'), // 配置输出的路径
        filename: 'bundle.js' // 配置输出的文件名
    },
    module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
            { test: /\.(png|jpg|gif|ttf|svg)$/, use: 'url-loader',use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},//处理图片路径问题
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' },
              
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
      ]
}