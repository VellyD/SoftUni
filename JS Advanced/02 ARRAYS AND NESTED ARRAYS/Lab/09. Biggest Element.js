function biggestElement(matrix) {

    let maxNumber = Number.MIN_SAFE_INTEGER

    matrix.forEach(row => {
        let currentMaxinRow = Number.MIN_SAFE_INTEGER
        row.forEach(number => {
            if (currentMaxinRow < number) {
                currentMaxinRow = number
            }
        })

        if (maxNumber < currentMaxinRow ) {
            maxNumber = currentMaxinRow
        }
    });
    return maxNumber;

};

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ));