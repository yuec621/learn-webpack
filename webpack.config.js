let path=require('path')
let HtmlWebpackPlugin=require('html-webpack-plugin')
let webpack=require('webpack')
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
        {test:'/\.js$/',
        use:{
            loader:'babel-loader',
            options:{
                presets:[
                    '@babel/preset-env',//解析es6
                    '@babel/preset-react'//解析react语法
                ]
            }
        }
        
        }
    ]
},
output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
},
plugins:[
    // new webpack.IgnorePlugin(/\.\/locale/,/moment/),
    new HtmlWebpackPlugin({
        template:'./public/index.html'
    })
]
}