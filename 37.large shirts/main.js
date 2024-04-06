// making a function
function make_shirt(size, printmassage) {
    if (size === void 0) { size = "large"; }
    if (printmassage === void 0) { printmassage = "I love typescript"; }
    console.log("creat a ".concat(size, " shirt with the ").concat(printmassage, " prints on shirt"));
}
// calling a function with by-defult values
make_shirt();
// calling a function  now with medium size and defult message
make_shirt("medium");
// calling a function now with small size and alos different print message 
make_shirt("small", "I love javascript");
