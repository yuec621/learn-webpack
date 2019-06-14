// console.log('home1')
// class Log{
//     constructor(){
//         console.log('对的')
//     }
// }
// let log=new Log()

/**
 * ajaxs四部曲：
 * 1.创建ajaxs
 * 2.
 */



let xhr=new XMLHttpRequest()//创建ajaxs
xhr.open('GET','/api/user',true)//开启ajaxs请求，异步
xhr.onload=function(){//打印成功的响应结果
    console.log(xhr.response)
}
xhr.send()//发出ajaxs