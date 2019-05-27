let instructorWithLongestName = function(values){
  let longest = 0;
  let longestNameObject;
  for (let i = 0; i < values.length; i++){
    if (values[i].name.length > longest ){
      longestNameObject = values[i];
      longest = values[i].name.length;
    }
  }
  return longestNameObject;
}


console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));