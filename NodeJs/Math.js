const add =(...rest)=>rest.reduce((acc,curr)=>acc+curr,0);
const subtract = (...rest)=>rest.reduce((acc,curr)=>acc-curr,0);
const multiply = (...rest)=>rest.reduce((acc,curr)=>acc*curr,1);
const divide = (...rest)=>rest.reduce((acc,curr)=>acc/curr,1);

// console.log(module)

module.exports = {
    add,
    subtract,
    multiply,
    divide
}
// console.log(module)