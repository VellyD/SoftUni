function oddPositions(numbers) {

    let result = numbers
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()

    return result.join(" ");

};

console.log(oddPositions([10, 15, 20, 25]));