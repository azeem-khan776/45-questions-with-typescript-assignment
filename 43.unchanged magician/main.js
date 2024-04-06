var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var megicianNames2 = ["ali", "areeb", "aman", "muneeb"];
// 
var megicianNamecopy = __spreadArray([], megicianNames2, true);
function show_megicianes(greet) {
    var withgreetings = "";
    for (var _i = 0, megicianNamecopy_1 = megicianNamecopy; _i < megicianNamecopy_1.length; _i++) {
        var item = megicianNamecopy_1[_i];
        withgreetings += "".concat(greet, ", ").concat(item, "\n");
    }
    ;
    return withgreetings;
}
;
var mygreetings = show_megicianes("Hello");
var makearray = mygreetings.split("\n");
console.log(makearray);
// orignal array
console.log(megicianNames2);
