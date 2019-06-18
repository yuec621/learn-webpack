let path=require('path')
let HtmlWebpackPlugin=require('html-webpack-plugin')
let webpack=require('webpack')
//模块happypack可以实现多线程来打包  进程
// let Happypack=require('happypack')
module.exports={
 mode:'development',
 entry:'./src/index.js',
devServer:{
    port:3000,
    open:true,
    contentBase:'./dist'
},
module:{
    noParse:/jquery/,//不去解析jquery中的依赖库
    rules:[
    //    {
    //        test:/\.js$/,
    //        exclude:/node_modules/,
    //        include:path.resolve('src'),
    //        use:'happypack/loader?id=js'
    //    }
    ]
},
output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
},
plugins:[
  
    // new webpack.IgnorePlugin(/\.\/locale/,/moment/),
    // new Happypack({
    //     id:'js'
    // }),
    new HtmlWebpackPlugin({
        template:'./public/index.html'
    })
]
}