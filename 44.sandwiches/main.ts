// array as a parameter

function mysendwiches(...item: string[]){
    return `i want sandwich of ${item}`;

};
// can add
let collection1 = mysendwiches("ham", "cheeze", "lettuce");

// as many you wish
let collection2 = mysendwiches("turky", "swiss");

// without arrgument 
let collection3 = mysendwiches();

console.log(collection1);
console.log(collection2);
console.log(collection3);