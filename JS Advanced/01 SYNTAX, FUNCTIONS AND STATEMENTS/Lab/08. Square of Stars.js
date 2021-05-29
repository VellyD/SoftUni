function solve(size) {
    let output = '';

    for (let i = 1; i <= size; i++) {
        output = '* '.repeat(size);
        console.log(output);
    };
};

solve(5);
