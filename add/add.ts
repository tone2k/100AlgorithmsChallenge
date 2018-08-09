function add(param1: number, param2: number): number {
    return param1 + param2;
}

function add2(...param1: number[]): number {
    // created variable to use for total and intialized at 0
    let total = 0;
    // for each element in array, take the number and add to the total then return
    param1.forEach((num) => {
        total += num;
    });
    return total;
}
// console.log(add(1, 2));
// console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

