const path = require('path');
// const UglifyPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// commonJS模块化
module.exports = { // 前四个为主要的概念
  // 入口
  entry: {
    main: [path.resolve(__dirname, 'src')],
  },
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[name].js' // 这里就又code-spliding的形式
  },
  // 加载器loader
  module: {
    // rules: [
    //   // babel处理js
    //   {
    //     test: /\.js?/,
    //     include: [
    //       path.resolve(__dirname, 'src') 
    //     ],
    //     use: 'babel-loader'
    //   },
    //   // 处理css
    //   {
    //     test: /\.less$/,
    //     include: [
    //       path.resolve(__dirname, 'src')
    //     ],
    //     // ExtractTextPlugin会处理解析后的css并单独形成一个文件
    //     use: ExtractTextPlugin.extract({
    //       fallback: 'style-loader',
    //       use: ['css-loader', 'less-loader']
    //     })
    //   },
    //   // 处理图片文件,没用过
    //   {
    //     test: /\.(png|jpg|gif)$/,
    //     use: [
    //       {
    //         loader: 'file-loader',
    //         options: {}
    //       }
    //     ]
    //   }
    // ],
    loaders: {
      test: /.js$/,
      use: 'babel-loader',
      // include: '',
      // query: {
      //   presets: ['es2015']
      // },
    }
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      // 可以自定义
      filename: 'edge.html', // 输出的文件名
      template: path.resolve(__dirname, 'assets/edge_template.html'), // 模板文件
      inject: 'body'
    }),
  ],
  // 代码路径解析的配置，不是非常重要的内容目前不管
  resolve: {}
}