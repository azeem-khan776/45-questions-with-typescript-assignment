var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print its orgnal order
var countriestovisit = ["chaina", "landmark", "brazil", "pakistan", "india",];
console.log("original order:", countriestovisit);
// print the array alphabetical order with modifying the actual array list
console.log("alphabetical order:", __spreadArray([], countriestovisit, true).sort());
// show that the array is still in its orignal order
console.log("still in orignal order:", countriestovisit);
// print the array in revers order without modifying the actul array list
console.log("Revers order:", __assign({}, countriestovisit).reverse());
// show that the array is still in its orignal order
console.log("still in orignal order:", countriestovisit);
// we have changed the original order list
console.log("original array Reversed:", countriestovisit.reverse());
// print the array to the show that its back to its orginal order 
console.log("back to orginal order:", countriestovisit.reverse());
// print the array to show that its order has been change in alphabetical order now
console.log("shorted in alphabetical order:", countriestovisit.sort());
// we have changed again the original order list in  revers order again
console.log("original array Reapeat:", countriestovisit.reverse());
