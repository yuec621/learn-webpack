//webpack 是node写出来的 node的写法
let path=require('path')//node的核心模块---自带
let HtmlWebpackPlugin=require('html-webpack-plugin')
// console.log(path.resolve('dist'))
module.exports={
    //开发服务器配置
    devServer:{
        port:5000,
        progress:true,
        contentBase:'./dist',
        compress:true
    },
    mode:'development',//模式两种 production--打包之前和development--压缩之后
   entry:'./src/index.js' ,//入口
   output:{
       filename:'bundle.js',//打包后的文件名
       path:path.resolve(__dirname,'dist'),//必须为绝对路径，resolve将相对路径转化为绝对路径

   },
   plugins:[//数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'index.html'
    })

   ]
}
