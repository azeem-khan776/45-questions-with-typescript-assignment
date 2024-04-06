// array is curent user  
var current_users = ["Ali", "aman", "aliyan", "areeb"];
// arrey is new user
var new_users = ["areba", "ali", "rabia", "fatima"];
// loop through new user check for  user name 
new_users.forEach(function (new_one_user) {
    // making a condition for username already exist and our condition varible 
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //    print of diffrent massages using if_else statement
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is avaliable"));
    }
});
