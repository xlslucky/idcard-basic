const path = require('path');
// const { babel } = require('@rollup/plugin-babel');
// const { nodeResolve } = require('@rollup/plugin-node-resolve');
const pkg = require('./package.json');
const typescript = require('rollup-plugin-typescript2')
const { terser } = require('rollup-plugin-terser')

// const extensions = ['.js', '.ts'];

module.exports = {
  input: path.resolve(__dirname, './src/index.ts'),
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  plugins: [
    typescript(),
    // nodeResolve({
    //   extensions,
    //   modulesOnly: true,
    // }),
    // babel({
    //   exclude: 'node_modules/**',
    //   babelHelpers: 'bundled',
    //   extensions,
    // }),
    terser(),
  ],
};