// function solve(params) {
//     let isMagical = false;
//     let currRSum = 0;
//     let currCSum = 0;

//     for (let i = 0; i < params.length; i++) {
//         let sum1 = params[i].reduce((acc, el) => acc + el, 0);

//         if (sum1 === currRSum) {
//             isMagical = true;

//         } else {
//             currRSum = sum1;
//         }

//         for (let j = 0; j <= params.length; j++) {
//             currCSum += [params[i][j]]
//         }
//     }

//     if (currCSum === currRSum) {
//         isMagical = true;
//     }

//     return isMagical;
// };

function solve(matrix) {
    let magicSum = Number.MIN_SAFE_INTEGER;
    let isMagic = true;

    for (let row = 0; row < matrix.length; row++) {
        let sum = matrix[row].reduce((acc, el) => acc +el);       

        if (magicSum === Number.MIN_SAFE_INTEGER) {
            magicSum = sum;
        };

        if (sum !== magicSum) {
            isMagic = false;
        };
    };

    for (let col = 0; col < matrix[0].length; col++) {
        let sum = 0;

        for (let row = 0; row < matrix.length; row++) {
            let el = matrix[row][col];
            sum += el;
        };

        if (sum !== magicSum) {
            isMagic = false;
        };
    };

    return isMagic;
};


console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));

// console.log(solve([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]
// ]));
// console.log(solve([
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]
// ]));