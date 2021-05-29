function solve(arr) {

    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
        inverseSum += (1 / Number(arr[i]));
        concat += String(arr[i]);
    };

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
};

solve([2, 4, 8, 16]);