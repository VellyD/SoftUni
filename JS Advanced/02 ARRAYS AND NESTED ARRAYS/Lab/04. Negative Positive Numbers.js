function solve(params) {
    let output = params.reduce((acc, curr) => {
        if (curr < 0) {
            acc.unshift(curr);
        } else {
            acc.push(curr);

        }
        return acc;
    }, [])
    return  output
};

console.log(solve([7, -2, 8, 9]));