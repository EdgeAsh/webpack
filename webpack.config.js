const path = require('path');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

module.exports = { // 前四个为主要的概念
  // 入口
  entry: {
    main: [path.resolve(__dirname, 'src')],
  },
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.js?/,
        include: [
          path.resolve(__dirname, 'src') 
        ],
        use: 'babel-loader'
      }
    ]
  },
  // 插件
  plugins: [
    new UglifyPlugin()
  ]
}