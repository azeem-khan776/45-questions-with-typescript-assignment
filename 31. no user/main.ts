let userName = ["aman","ali","aliyan","azeem admin","areeb"];
 userName = []

if(userName.length === 0){
console.log("your array in empty we need to find some user!");
}else{
    userName.forEach(oneuser =>{
        if(oneuser ===  "azeem admin"){
            console.log(`hello ${oneuser},would you like to see a status report?`)
        }else {
            console.log(`hello ${oneuser},thank you for logging in again`)
        }
    })
    
    
}
