// condition will be either "even" or "odd";
// sum all the values in the array that meet the condition;

let conditionalSum = function (values, condition){
  let total = 0;
  for (let i = 0; i < values.length; i++){
    if (condition === "even"){
      if (values[i] % 2 === 0){
        total += values[i];
      }
    } else if (condition === "odd"){
      if (values[i] % 2 !== 0){
        total += values[i];
      }
    }
  }
  return total;
}


// test conditions
let myArray = [1, 2, 3, 4, 5];
let myArray2 = [5, 11];
let myArray3 = [2, 4, 6];


console.log(conditionalSum(myArray, "odd")); // should return and log 9
console.log(conditionalSum(myArray, "even")); // should return and log 6
console.log(conditionalSum(myArray2, "odd")); // should return and log 16
console.log(conditionalSum(myArray3, "even")); // should return and log 12
