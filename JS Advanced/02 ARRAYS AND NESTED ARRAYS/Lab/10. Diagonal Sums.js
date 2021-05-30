function diagonalSums(matrixArr) {
    let leftDiagonalSum = 0
    let rightDiagonalSum = 0
    let index = 0
   
    matrixArr.forEach(row => {
        leftDiagonalSum += row[index]
        rightDiagonalSum += row[row.length - 1 - index]
        index++
    });

    return `${leftDiagonalSum} ${rightDiagonalSum}`;
};

console.log(diagonalSums([[20, 40],
    [10, 60]]
   ));