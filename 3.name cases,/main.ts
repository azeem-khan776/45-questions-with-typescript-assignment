let personname = "azeem";
console.log(personname.toLocaleLowerCase());

console.log(personname.toUpperCase());

console.log(personname.replace(/\b\w/g, (char) => char.toUpperCase()));