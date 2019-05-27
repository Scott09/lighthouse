let urlEncode = function(text){
  let myArray = text.split(' ');
  let myString = '';
  for (let i = 0; i < myArray.length; i++){
    if (myArray[i] === ''){
      continue;
    } else {
      myString += myArray[i] + '%20';
    }
  }
  return myString;
}





console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));