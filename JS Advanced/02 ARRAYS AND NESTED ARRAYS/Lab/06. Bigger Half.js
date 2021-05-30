function biggerHalf(numberArr) {

    let divider = (numberArr.length)/2
    let sortedArr = numberArr.sort((a, b) => a - b)
    let result = []

    if (divider % 2 !== 0) {
        result =  sortedArr.splice((Math.floor(divider)),)
    } else {
       result =  sortedArr.splice(divider,)
    }

    return result;
};