// let str=require('./a.js')
// console.log(str)
// require('./index.css')
// import $ from 'jquery';
//express-loader暴露全局的loader 内联的loader
//pre前面执行的loader normal普通loader 内联liader 后置postloader
// console.log($)

//webpack打包我们的图片
//1.在js中创建图片来引入
// import logo from './1.jpg';
// let image=new Image();
// console.log(logo)
// image.src=logo;
// document.body.appendChild(image)
//2.在css引入background('url')
import './index.css'
//3.在html<img src="" />