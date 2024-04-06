// array is curent user  
let current_users = ["Ali","aman","aliyan","areeb"];

// arrey is new user
let new_users = ["areba","ali","rabia","fatima"];

// loop through new user check for  user name 

new_users.forEach(new_one_user =>{

    // making a condition for username already exist and our condition varible 
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
   
//    print of diffrent massages using if_else statement
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken`)
    }else{
        console.log(`this username ${new_one_user} is avaliable`)
    }
})