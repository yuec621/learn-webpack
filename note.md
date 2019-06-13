##webpack

-安装本地webpack
npm i webpack -D//表示上线的时候不需要打包
##webpack可以进行0配置
-打包工具-》输出后的结果（js模块）---webpack默认支持js模块

-打包（支持我们的js模块化）
##手动配置webpack
-默认配置文件的名字 webpack.config.js
##安装内置开发服务
yarn add webpack-dev-server -D
-生成内存中的打包--》并非真实的打包
##安装html插件生成模板插入dist文件下
yarn add html-webpack-plugin

##安装css模板配置
yarn add css-loader style-loader -D

##安装抽离css插件
yarn add mini-css-extract-pligin -D

##改变样式---改变前缀
yarn add postcss-loader autoprefixer
##将标准语法转化为低级语法
yarn add babel-loader @babel/core @babel/preset-env

##转高级语法
yarn add @babel/plugin-transform-runtime -D
yarn add @babel/runtime

##校验js语法
yarn add eslint eslint-loader

##第三方模块的使用
yarn add jquery

##暴露全局loader
yarn add express-loader

##file-loader默认会在内部生成一张图片 到dist目录下 并把生成图片的名字返回回来
yarn add file-loader -D
##解析html文件并编译文件
yarn add html-withimg-loader -D
##做一个限制 当我们的图片小于多少k的时候 用base64来转化，若大于多少k则用file-loader产生真实的图片
yarn add url-loader -D

##上线代码压缩
-webpack.config.js里面改为production
--npm run build
---minify版配置