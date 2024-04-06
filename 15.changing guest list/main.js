var newguestlist = ["aman", "ali", "aqib", "kamran"];
var dontcome = newguestlist[0];
console.log(dontcome, "ye nhi aye ga");
newguestlist.splice(0, 1, "muneeb");
newguestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
