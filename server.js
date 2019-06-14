/**
 * 自己写服务端 实现跨域功能
 * expres帮我们实现服务端功能
 */
let express=require('express')//起个服务
let app=express()
let webpack=require('webpack')//第三种方式跨域
//中间件
let middle=require('webpack-dev-middleware')
let config=require('./webpack.config.js')
let compiler= webpack(config)
app.use(middle(compiler))

app.get('/user',(req,res)=>{
    res.json({name:'我的webpack'})
})
app.listen(3000)
