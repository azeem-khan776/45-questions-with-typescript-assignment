function cardetail (manufacture: string, modelnumber: string, ...additionalinfo){
    const car = {manufacture, modelnumber, ...Object.fromEntries(additionalinfo)};
    return car;   
}

const mycardetails = cardetail("toyota", "corolla", [`color`, `blue`],
[`year`, 2022]);

console.log(mycardetails);