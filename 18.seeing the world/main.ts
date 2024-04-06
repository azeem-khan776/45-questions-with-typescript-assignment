// making a array of countries and print its orgnal order
let countriestovisit:string[] = ["chaina","landmark","brazil","pakistan","india",];

console.log("original order:",countriestovisit)

// print the array alphabetical order with modifying the actual array list
console.log("alphabetical order:",[...countriestovisit].sort());

// show that the array is still in its orignal order
console.log("still in orignal order:", countriestovisit);

// print the array in revers order without modifying the actul array list
console.log("Revers order:",{...countriestovisit}.reverse());

// show that the array is still in its orignal order
console.log("still in orignal order:", countriestovisit);

// we have changed the original order list
console.log("original array Reversed:",countriestovisit.reverse());

// print the array to the show that its back to its orginal order 
console.log("back to orginal order:", countriestovisit.reverse());

// print the array to show that its order has been change in alphabetical order now
console.log("shorted in alphabetical order:", countriestovisit.sort());

// we have changed again the original order list in  revers order again
console.log("original array Reapeat:",countriestovisit.reverse());