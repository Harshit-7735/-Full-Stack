// console.log(module)
// console.log(require('./Math.js'))

// console.log(Math.add(1,2,3,4,5))
// console.log(require('./Math.js').add(1,2,3,4,5))

const {add,subtract,multiply,divide} = require('./Math.js')
console.log(add(1,2,3,4,5))
console.log(subtract(1,2,3,4,5))
console.log(multiply(1,2,3,4,5))
console.log(divide(1,2,3,4,5))
