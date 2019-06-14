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
/**
 * //默认访问路径8081------服务端3000
 * 将请求先发到8081（webpack-dev-server的服务）---》再发到3000
 */
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
let xhr=new XMLHttpRequest()//创建ajaxs
xhr.open('GET','/user',true)//开启ajaxs请求，异步
xhr.onload=function(){//打印成功的响应结果
    console.log(xhr.response)
}
xhr.send()//发出ajaxs


// import axios from 'axios'
// const http=axios.create({
   
//     baseUrl:'http://localhost:3000/api/user'
    
// })
// const res=this.http.get("/api/user")
// console.log(res)
// console.log('helo')
// export default http 