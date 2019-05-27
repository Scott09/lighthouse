let numberOfVowels = function(values){
  let totalVowels = 0;
  let valueArray = values.split('');
  for (let i = 0; i < valueArray.length; i++){
    if (valueArray[i] === 'a' || valueArray[i] === 'e' || valueArray[i] === 'i' || valueArray[i] === 'o' || valueArray[i] === 'u'){
      totalVowels++;
    }
  }
  return totalVowels;
}



let myString = "Let's check to see how many vowels are in this string";


console.log(numberOfVowels(myString));

