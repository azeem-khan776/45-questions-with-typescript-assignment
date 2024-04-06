

let megicianNames2 = ["ali", "areeb", "aman", "muneeb"];

// making a new copy array
let megicianNamecopy = [...megicianNames2];
function show_megicianes(greet: string){
    let withgreetings = "";


    for(let item  of megicianNamecopy){
    withgreetings += `${greet}, ${item}\n`;
    };
    return withgreetings;
};

let mygreetings = show_megicianes("Hello");
let makearray = mygreetings.split(`\n`);
console.log(makearray);
 
// orignal array
console.log(megicianNames2)
