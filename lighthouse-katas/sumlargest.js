let sumLargestNumbers = function(array){
  let largestNumber = 0;
  let secondNumber = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] > largestNumber){
      largestNumber = array[i];
    }
  }
  for(let i = 0; i < array.length; i++){
    if (array[i] === largestNumber){
      continue;
    } else {
      if (array[i] > secondNumber){
        secondNumber = array[i];
      }
    }
  }
  return largestNumber + secondNumber;
}



// test cases

let myArray = [1,3,7,11];  // should be 18
let myArray2 = [43, 11, 16, 57]; // should be 100
let myArray3 = [1, 111, 5, 8, 52]; // should be 163


console.log(sumLargestNumbers(myArray));
console.log(sumLargestNumbers(myArray2));
console.log(sumLargestNumbers(myArray3));

