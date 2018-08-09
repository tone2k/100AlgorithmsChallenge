function absoluteValuesSumMinimization(a: number[]): number {
    // checks if array is even or odd
    const isEven = a.length % 2 === 0;
    // if it is even, return the legnth divided by two minus on, or if odd, floor the number, and half it. 
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));