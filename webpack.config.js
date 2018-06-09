const path = require('path');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = { // 前四个为主要的概念
  // 入口
  entry: {
    main: [path.resolve(__dirname, 'src')],
  },
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[name].js'
  },
  // 加载器loader
  module: {
    rules: [
      // babel处理js
      {
        test: /\.js?/,
        include: [
          path.resolve(__dirname, 'src') 
        ],
        use: 'babel-loader'
      },
      // 处理css
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        // ExtractTextPlugin会处理解析后的css并单独形成一个文件
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      // 处理图片文件,没用过
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  // 插件
  plugins: [
    new UglifyPlugin(),
    // 将html页面与打包好的js文件关联，从而不需要关心js文件、js路径变化导致的引用错误
    new HtmlWebpackPlugin({
      // 可以自定义
      filename: 'edge.html', // 输出的文件名
      template: path.resolve(__dirname, 'assets/edge_template.html') // 模板文件
    }),
    // 将css文件单独分离出来的插件，
    new ExtractTextPlugin('edge-[name].css')
  ],
  // 代码路径解析的配置，不是非常重要的内容目前不管
  resolve: {}
}