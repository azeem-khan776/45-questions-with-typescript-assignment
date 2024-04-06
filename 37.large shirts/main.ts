// making a function

function make_shirt (size: string = "large", printmassage: string = "I love typescript"){
    console.log(`creat a ${size} shirt with the ${printmassage} prints on shirt`)
}
// calling a function with by-defult values

make_shirt();

// calling a function  now with medium size and defult message

make_shirt("medium")

// calling a function now with small size and alos different print message 

make_shirt("small", "I love javascript");