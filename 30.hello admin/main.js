// creat a array
var userNname = ["aman", "ali", "aliyan", "azeem admin", "areeb"];
// using  for each loop array 
userNname.forEach(function (oneuser) {
    if (oneuser === "azeem admin") {
        console.log("hello ".concat(oneuser, ",would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ",thank you for logging in again"));
    }
});
