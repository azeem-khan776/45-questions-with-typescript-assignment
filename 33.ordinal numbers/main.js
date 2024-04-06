var numbers = [1, 2, 3, 4, 5, 6, 7];
// using code for loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var onenumber = numbers_1[_i];
    var ordinalEnding = void 0;
    if (onenumber === 1) {
        ordinalEnding = "st";
    }
    else if (onenumber === 2) {
        ordinalEnding = "nd";
    }
    else if (onenumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(onenumber).concat(ordinalEnding));
}
