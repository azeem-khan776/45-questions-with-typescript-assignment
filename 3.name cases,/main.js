var personname = "azeem";
console.log(personname.toLocaleLowerCase());
console.log(personname.toUpperCase());
console.log(personname.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
