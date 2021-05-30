function lastKNumbers(n, k) {
    let arr = [1]

    for (let i = 1; i < n; i++) {
        let lastElement = arr.slice(-k)
        let result = lastElement.reduce((a, x) => a += x)
        arr.push(result)
    }

    return arr;
}

console.log(lastKNumbers(6, 3));