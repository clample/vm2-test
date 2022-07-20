const {NodeVM} = require('vm2');
const vm = new NodeVM({
  console: 'inherit',
  nesting: false,
  wrapper: 'commonjs',
  
  require: {
    root: ['dir1'],
    external: [],
    // context: 'sandbox'
  },
});

const script = `
const value = require('./dir1/intermediate.js')
console.log('It works', value)
`

console.log('Running from dir1')
vm.run(`const value = require('./dir1/intermediate.js'); console.log('It works', value)`, 'main.js')

console.log('Running from dir1/dir2')
vm.run(`const value = require('./dir1/dir2/intermediate.js'); console.log('It works', value)`, 'main.js')
