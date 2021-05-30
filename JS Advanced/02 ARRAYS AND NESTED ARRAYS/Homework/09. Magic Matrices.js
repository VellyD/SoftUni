function solve(params) {
    let isMagical = false;
    let currRSum = 0;
    let currCSum1 = 0;
    let currCSum2 = 0;
    let currCSum2 = 0;

    for (let i = 0; i < params.length; i++) {
        let sum1 = params[i].reduce((acc, el) => acc + el, 0);

        if (sum1 === currRSum) {
            isMagical = true;

        } else {
            currRSum = sum1;
        }

        for (let j = 0; j < params.length; j++) {
            currCSum += [params[i][j]] 
        }
    }

    if(currCSum === currRSum){
        isMagical = true;
    }

    return isMagical;
};


console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
   ));