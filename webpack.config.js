const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode:'development',  // 如果为production 则会提醒性能方面的问题
  // devtool: 'inline-source-map',
  entry:{
    FUI:'./libs/index.tsx'  // FUI就是输出的文件名，如jquery.js
  },
  output:{
    // path:__dirname+'/dist'//错！因为其他操作系统的目录分隔符不是/
    path:path.resolve(__dirname,'dist/lib'),// nodejs的目录系统
    libraryTarget:'umd'//可选值：umd amd commonjs global this window

  },
  module:{
    rules:[// 随机应变去找合适的rules
      {
        test:'/\.tsx?$/',  //匹配所有的tsx文件或者tx
        loader:'awesome-typescript-loader'
      }
    ] 
  },
  plugins:[
    new HtmlWebpackPlugin({ title:'FUI',template:'index.html' })  // 在index里动态插入js
  ],
}