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



##上线代码压缩
-webpack.config.js里面改为production
--npm run build
---minify版配置