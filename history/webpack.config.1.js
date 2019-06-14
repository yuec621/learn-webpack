let path=require('path')
let HtmlWebpackPlugin=require('html-webpack-plugin')
let CleanWebpackPlugin=require('clean-webpack-plugin')
module.exports={
/**
 * 1.cleanWebpackPlugin
 * 2.copyWebpackPlugin
 * 3.bannerPlugin//内置
 */
    mode:'development',
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
    devServer:{

        //第三种---有服务端--不想用代理处理  ***在服务端中启动webpack.端口用服务端端口
        


        //第二种
        // before(app){
        //     app.get('/user',(req,res)=>{
        //         res.json({name:'我的webpack-----'})
        //     })
        // }
        //第一种
        // proxy:{//重写 把请求代理到express服务器上
        //     '/api':{
                
        //         target:'http://localhost:3000',
        //         pathRewrite:{'/api':''}
        //     }//配置了一个代理
        // }
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
        // new CleanWebpackPlugin('./dist')
       
    ]
}