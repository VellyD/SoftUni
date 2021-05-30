function solve(arr) {
    //return ((Number(arr[0])) + Number(arr[arr.length - 1]));

    let a = Number(arr.pop())
    let b = Number(arr.shift())

    return a + b;
};

console.log(solve(['20', '30', '40']));