function solve(params) {
    let current = 0
    let output = params.reduce((acc, el) => {
        if (el >= current) {
            current = el;
            acc.push(el)
        }

        return acc
    }, [])

    return output;
};

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    
));