// array as a parameter
function mysendwiches() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    return "i want sandwich of ".concat(item);
}
;
// can add
var collection1 = mysendwiches("ham", "cheeze", "lettuce");
// as many you wish
var collection2 = mysendwiches("turky", "swiss");
// without arrgument 
var collection3 = mysendwiches();
console.log(collection1);
console.log(collection2);
console.log(collection3);
