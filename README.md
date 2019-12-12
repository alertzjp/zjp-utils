# zjp-utils 个人工具库(npm工程)

## 安装和使用:
   1. git clone 拉取代码
   2. npm install 安装依赖
   3. npm run build 打包
   4. import zjputils  from 'zjp-utils' 引用

目前的js库的方法有:
+ isPhoneNum
+ savesessionStorage
+ getsessionStorage
+ removesessionItem
+ savelocalStorage
+ getlocalStorage
+ removelocalItem
+ gettime
+ filtering
+ dropobjectItem
+ getUrlParam
现在还没有使用任何参数类型检查工具,之前会加上 

## rollup打包 类似webpack
 rollup就是专门用来打包library的,而webpack大多是用来打包应用程序的.
 roll -c  执行 rollup.config.js
 ```
      import { terser } from 'rollup-plugin-terser'
      import babel from 'rollup-plugin-babel'
      export default {
           input: './src/index.js',
           output: {
               file: './dist/zjp-utils.esm.js',
               format: 'es',
               name:'zjp-utils'
           },
           plugins: [
              babel({
                    exclude: 'node_modules/**'
               }),
               terser()
           ]
       };
 ```

  1. rollup-plugin-terser  压缩代码插件
  2. rollup-plugin-babel  将代码中es6+ 转成浏览器能执行的
  3. format 包的格式为es模块
