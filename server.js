/**
 * 自己写服务端 实现跨域功能
 * expres帮我们实现服务端功能
 */
let express=require('express')//起个服务
let app=express()
app.get('/api/user',(req,res)=>{
    res.json({name:'我的webpack'})
})
app.listen(3000)
