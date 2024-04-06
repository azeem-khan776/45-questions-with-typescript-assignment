var userName = ["aman", "ali", "aliyan", "azeem admin", "areeb"];
userName = [];
if (userName.length === 0) {
    console.log("your array in empty we need to find some user!");
}
else {
    userName.forEach(function (oneuser) {
        if (oneuser === "azeem admin") {
            console.log("hello ".concat(oneuser, ",would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneuser, ",thank you for logging in again"));
        }
    });
}
