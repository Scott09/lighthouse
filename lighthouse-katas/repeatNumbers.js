const repeatNumbers = function(data){
  let myArray = [];
  for (let i = 0; i < data.length; i++){
    myArray.push( toString(data[i][i]).repeat(data[0][1]));
  }
  console.log(myArray);
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

