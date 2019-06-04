let myArray = process.argv.slice(2);

let myObject = {};

[ ,myObject.username, myObject.email] = myArray;

console.log(myObject);