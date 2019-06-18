class SyncWaterfallHook { //钩子是同步的
    constructor(args) { //args=>['name']
        this.tasks = []
    }
    tap(name, task) {
        this.tasks.push(task)
    }
    
    call(...args) {
        let [first, ...others] = this.tasks
        let ret = first(...args)
        others.reduce((a, b) => {
            return b(a)
        }, ret)
    }
}
   let hook = new SyncWaterfallHook(['name'])
    hook.tap('react',  (name)=> {
        console.log('react', name)
        return 'reactok'
    })
    hook.tap('webpack',  (data)=> {
        console.log('webpack', data)
        return 'webpack'
    })
    hook.tap('node',  (data)=> {
        console.log('node', data)
    })
    hook.call('jw')