// ...REST Operator
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
const sum = (...args) => {
  console.log(args);
};
sum(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]

const sum1 = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum1(1, 2, 3, 4, 5)); // Output: 15
