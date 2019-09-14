const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({},base,{
  mode:'development',  // 如果为production 则会提醒性能方面的问题 最后要分别放置
  plugins:[
    new HtmlWebpackPlugin({ title:'FUI',template:'index.html' })  // 在index里动态插入js
  ],
  
})