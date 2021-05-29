function solve(string) {
    let wordsArr = string.match(/\w+/g);
    let output = [];

    for (const word of wordsArr) {
        output.push(word.toUpperCase());
    }
    return output.join(', ');
}
console.log(solve('Hi, how are you?'));