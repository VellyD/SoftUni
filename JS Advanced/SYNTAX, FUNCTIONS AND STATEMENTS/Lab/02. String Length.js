function solve(str1, str2, str3) {
    let strLengthsum = Number(str1.length) + Number(str2.length) + Number(str3.length)

    console.log(strLengthsum);
    console.log(Math.floor(strLengthsum / 3));
};

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');