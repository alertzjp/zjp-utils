# zjp-utils 个人工具库(npm工程)

## 安装和使用:
   1. git clone 拉取代码
   2. npm install 安装依赖
   3. npm run build 打包
   4. import zjputils  from 'zjp-utils' 引用

## rollup打包 类型webpack

 (```)
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
 (```)

  1. rollup-plugin-terser  压缩代码插件
  2. rollup-plugin-babel  将代码中es6+ 转成浏览器能执行的
  3. format 包的格式为es模块
