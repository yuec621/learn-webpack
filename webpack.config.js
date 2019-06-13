//webpack 是node写出来的 node的写法
let path=require('path')//node的核心模块---自带
let HtmlWebpackPlugin=require('html-webpack-plugin')
let MiniCssExtractPlugin=require('mini-css-extract-plugin')
let webpack=require('webpack')
// console.log(path.resolve('dist'))
module.exports={
    //开发服务器配置
    devServer:{
        port:5000,
        progress:true,
        contentBase:'./dist',
        compress:true
    },
    mode:'development',//模式两种 (production --上线配置)--打包之前和development--压缩之后
   entry:'./src/index.js' ,//入口
   output:{
       filename:'bundle.[hash:8].js',//打包后的文件名
       path:path.resolve(__dirname,'dist'),//必须为绝对路径，resolve将相对路径转化为绝对路径

   },
   plugins:[//数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'index.html',
        //上线配置
        // minify:{
        //     removeAttributeQuotes:true,//去掉双引号
        //     collapseWhitespace:true,//变为一行

        // }
        // hash:true//hash戳
    }),
    new MiniCssExtractPlugin({
        filename:'main.css',

    }),
    new webpack.ProvidePlugin({//在每个模块中都注入$
        jquery:'$'
    })

   ],
   module:{//模块
    rules:[//找到一个合适的loader进行文件模块化转化,特点：希望单一
        //css-loader---负责解析@import这种语法
        //style-loader把css插入到head的标签中
        //loader的用法  一个loader为字符串形式，多个为数组
        //从右向左执行,从上到下
        //loader还可写成对象的方式
        // {
        //     test:/\.js$/,
        //     use:{
        //         loader:'eslint-loader'
        //     }
        // },

        {test:/\.css$/,
            use:[
            //     {loader:'style-loader',
            //     options:{
            //         insertAt:'top'
            //     }
            
            // },
                   MiniCssExtractPlugin.loader,
                   'css-loader',
                    'postcss-loader'
                ]}

    ]

   }
}
