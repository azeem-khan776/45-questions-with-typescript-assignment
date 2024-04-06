// creating a guest array
var guestlist = ["areeb", "muneeb", "ali", "aman", "kamran"];
// making a variable for those guest who cant come
var dontcome = guestlist[0];
// print the name of guest who cant come
console.log(dontcome, "nhi aa sakty");
//  add or remove values from guest list aaray
guestlist.splice(0, 1, "arif");
// massage print for bigger table
console.log("good news ! we have found a bigger table for dinner.");
// add a new  guest value at start index of array
guestlist.unshift("amir");
// add a new guest value at end index of array
guestlist.push("azeem");
// add guest middle index of aaray
var middleindex = Math.floor(guestlist.length / 2);
// add a new guest to middle index of arry
guestlist.splice(middleindex, 0, "abit");
// print massage of updated list
console.log("updated list of our guests");
// sending a invitation massage to our guest one by one with their name
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me?")); });
