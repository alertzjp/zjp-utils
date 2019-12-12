# zjp-utils 个人工具库(npm工程)


### rollup打包 类型webpack

(```)
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

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
 1.rollup-plugin-terser  压缩代码插件
 2.rollup-plugin-babel  将代码中es6+ 转成浏览器能执行的
 3.format 包的格式为es模块
