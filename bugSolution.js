function foo(a, b) {
  a = a === null ? 0 : a; // Handle null by assigning a default value of 0
  b = b === null ? 0 : b; // Handle null by assigning a default value of 0
  return a + b; 
}

console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2)); // Output: 3

//Alternative solution using exception handling
function foo2(a,b){
  if(a === null || b === null){
    throw new Error('Null values are not allowed')
  }
  return a+b;
}
console.log(foo2(1,2)); //Output: 3
//console.log(foo2(1, null)); //Throws an error