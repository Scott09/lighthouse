module.exports = (string, characters = string.length) => {
  let myString = string + '!'.repeat(characters);
  return myString;
}