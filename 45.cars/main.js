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
function cardetail(manufacture, modelnumber) {
    var additionalinfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalinfo[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacture: manufacture, modelnumber: modelnumber }, Object.fromEntries(additionalinfo));
    return car;
}
var mycardetails = cardetail("toyota", "corolla", ["color", "blue"], ["year", 2022]);
console.log(mycardetails);
