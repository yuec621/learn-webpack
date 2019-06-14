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