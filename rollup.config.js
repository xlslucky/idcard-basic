const path = require('path')
const pkg = require('./package.json')
const typescript = require('rollup-plugin-typescript2')
const { terser } = require('rollup-plugin-terser')

// const extensions = ['.js', '.ts'];

module.exports = {
  input: path.resolve(__dirname, './src/index.ts'),
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'cjs' },
    { file: pkg.browser, name: 'idcard', format: 'umd' },
  ],
  plugins: [typescript(), terser()],
}
