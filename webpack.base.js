let path=require('path')
let HtmlWebpackPlugin=require('html-webpack-plugin')
let CleanWebpackPlugin=require('clean-webpack-plugin')
module.exports={

    mode:'development',
    entry:{
       home:'./src/index.js',
    
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve:{//解析 第三方包 common
        modules:[path.resolve('node_modules')],
        // alias:{//别名vue vue.runtime
        //     bootstrap:'bootstrap/dist/css/bootstrap.css'
        // }
        // mainFields:['style','main']
        // mainFiles:[]//入口文件的名字
        

    },
    devServer:{

      
    },
    output:{
        //[name]home\other
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
            
        }),
     
       
    ]
}