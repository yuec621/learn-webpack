class AsyncParallelHook { //异步运行的钩子
    constructor(args) { //args=>['name']
        this.tasks = []
    }
    tapAsync(name, task) {
        this.tasks.push(task)
    }

    callAsync(...args) {
        let finalCallback=args.pop()//拿出最终的函数
        let index=0
        let done=()=>{
            index++
            if(index==this.tasks.length){
                finalCallback()
            }
        }
        this.tasks.forEach(task=>{
            task(...args,done)
        })
    }
}

let hook = new AsyncParallelHook(['name'])
let total = 0
hook.tapAsync('react', function (name, cd) {
    setTimeout(() => {
        console.log('react', name)
        cd()

    }, 1000)

})

hook.tapAsync('node', function (name,cd) {
    setTimeout(() => {
        console.log('node', name)
        cd()

    }, 1000)
  
})
hook.callAsync('jw',function(){
    console.log('end')
})