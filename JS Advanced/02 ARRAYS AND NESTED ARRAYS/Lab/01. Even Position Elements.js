function solve(arr) {

    let output = arr.filter((e, i) => {
        if (i % 2 === 0){
            return e
        }
    })

    return output.join(' ');
}

console.log(solve(['20', '30', '40', '50', '60']));