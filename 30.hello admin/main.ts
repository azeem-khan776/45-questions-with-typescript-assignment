// creat a array
let userNname = ["aman", "ali", "aliyan", "azeem admin","areeb"];

// using  for each loop array 
userNname.forEach(oneuser =>{
    if(oneuser ===  "azeem admin"){
        console.log(`hello ${oneuser},would you like to see a status report?`)
    }else {
        console.log(`hello ${oneuser},thank you for logging in again`)
    }
})

