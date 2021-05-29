function solve(arr, step) {
    return arr.filter((el, i) => i % step === 0 );
};

solve(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2
);