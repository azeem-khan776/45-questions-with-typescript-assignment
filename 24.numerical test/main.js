// define viriable
var apple = "apple";
var uppercaseapple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// // test for equality and inequality with strings
console.log("is apple is equal to apple");
console.log(apple == "apple");
console.log("\nis apple is not equal to apple");
console.log(apple != "apple");
// // test using lower case funtion
console.log("\n is APPLE is equal to apple after converting to lowercase");
console.log(uppercaseapple.toLocaleLowerCase() == "apple");
console.log("\n is APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseapple.toLocaleLowerCase() != "apple");
// // equal to
console.log("\n is ten is  equl to twenty ?");
console.log(ten == twenty);
// // not equal to
console.log("\n is ten is not equl to twenty ?");
console.log(ten != twenty);
// // greater than
console.log("\n is ten greater then zero");
console.log(ten > 0);
// // less than
console.log("\n is twenty is less than 10");
console.log(twenty < 10);
// // greater than equal to    
console.log("\n ten is greater than or equal to 5?");
console.log(ten >= 5);
// // less then or equal 
console.log("\n twenty is less than or equal to 10?");
console.log(twenty <= 10);
// test using "and" and "or" opreaters
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// using || (or)
console.log("\n 20 is  greter than 50 or 20 isequal to twenty");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is  greter than 50 or 20 is not equal to twenty");
console.log(20 > 50 || 20 != 20);
// test weather in item include in array 
console.log("\n is orange include in my array fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("\n is orange not include in my fruits array ");
console.log(!fruits.includes("orange"));
