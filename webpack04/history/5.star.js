let {AsyncParallelHook}=require('tapable')
//异步的钩子(串行) 并行
//同时发送多个请求
//注册方法 分为 tap注册  tapAsync
 class Lesson{
    constructor(){
        this.index=0
        this.hooks={
            arch:new AsyncParallelHook(['name']),
        }
    }
    tap(){//注册监听函数
      this.hooks.arch.tapAsync('node',(name,cd)=>{
          setTimeout(()=>{
            console.log('node',name)
            cd()
          },1000)
               
      })  
      this.hooks.arch.tapAsync('react',(name,cd)=>{
        setTimeout(()=>{
            console.log('react',name)
            cd()
          },1000)
     
    }) 
    }
    start(){
        this.hooks.arch.callAsync('jw',function(){
            console.log('end')
        })
    }

}
let l=new Lesson()
l.tap()//注册这两个事件
l.start()//启动钩子
