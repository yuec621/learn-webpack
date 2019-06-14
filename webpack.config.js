let path=require('path')
let HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={

    mode:'production',
    entry:{
       home:'./src/index.js',
    //    other:'./src/other.js' 
    },
    module:{
        rules:[
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
    watch:true,//看打包后的文件
    // watchOptions:{//监控选项
    //     poll:1000,//每秒1000次
    //     aggreatement:500,//防抖
    //     ignored:/node_modules/ //不需要进行监控哪个文件
    // },
    output:{
        //[name]home\other
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
            
        })
       
    ]
}