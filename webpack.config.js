const path = require('path')
module.exports = {
  mode:'production',
  entry:{
    FUI:'./libs/index.tsx'  // FUI就是输出的文件名，如jquery.js
  },
  output:{
    // path:__dirname+'/dist'//错！因为其他操作系统的目录分隔符不是/
    path:path.resolve(__dirname,'dist/lib'),// nodejs的目录系统
    libraryTarget:'umd'//

  },
  module:{
    rules:[// 随机应变去找合适的rules
      {
        test:'/\.tsx?$/',  //匹配所有的tsx文件或者tx
        loader:'awesome-typescript-loader'
      }
    ] 
      
    
  }
}