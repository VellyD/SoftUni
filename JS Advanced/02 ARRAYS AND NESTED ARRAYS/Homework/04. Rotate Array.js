function solve(arr, num) {
    let realRotations = num % arr.length;
   
    for (let i = 0; i < realRotations; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }

    return arr.join(' ');
};

console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

));

// console.log(solve(['Banana',
//         'Orange',
//         'Coconut',
//         'Apple'
//     ],
//     15));