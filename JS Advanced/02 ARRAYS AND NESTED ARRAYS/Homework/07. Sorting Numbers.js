function solve(params) {
    let sorted = params.sort((a, b) => a - b);
    let result = [];
    while (sorted.length > 0) {
        let small = sorted.shift();
        let bigg = sorted.pop();

        result.push(small)
        result.push(bigg)

    }
    return result ; 

};
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
);