
// creating a guest array
let guestlist =  ["areeb","muneeb","ali","aman","kamran"];

// making a variable for those guest who cant come
let dontcome = guestlist[0];

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
let middleindex: number = Math.floor(guestlist.length / 2);

// add a new guest to middle index of arry
guestlist.splice(middleindex, 0, "abit");

// print massage of updated list
console.log("updated list of our guests");

// sending a invitation massage to our guest one by one with their name
guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me?`));

// inform that only two guest can be invited for dinner
console.log("unfortunately,the new dinner table wont arrive on time, so i can only invite two guest to dinner wirh me ");

// use while-loop to remove guest from array until only two name remain 
while(guestlist.length > 2){
 let removedguest = guestlist.pop();
 console.log(`sorry, ${removedguest} i cant invite you to dinner`);
}
// sending a invitation to the last two guest on the list
console.log("invitations to the  2 guests")

guestlist.forEach(lasttwo => console.log(`lukyly ${lasttwo}, you are still invited to dinner`));

// removing last two guest from the list 
guestlist.pop();
guestlist.pop();

console.log( "empty list", guestlist);





