let newguestlist = ["aman","ali","aqib","kamran"];

let dontcome = newguestlist[0];

console.log(dontcome, "ye nhi aye ga");

newguestlist.splice(0, 1, "muneeb");

newguestlist.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));