// import jquery from 'jquery'
// import moment from 'moment'
// //手动引入所需要的语言
// import 'moment/locale/zh-cn'
// moment.locale('zh-cn')
// let r=moment().endOf('day').fromNow()
// console.log(r)

let button=document.createElement('button')
button.innerHTML='hello'
button.addEventListener('click',function(){
    // console.log('click')
    import('./source.js').then(data=>{
        console.log(data)
    })
})
document.body.appendChild(button)