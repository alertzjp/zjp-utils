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
