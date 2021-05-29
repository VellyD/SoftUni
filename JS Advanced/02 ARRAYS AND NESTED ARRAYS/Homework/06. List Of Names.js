function solve(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b));

    arr.forEach((element, i) => {
        console.log((`${i +1}.${element}`));
    });;

};

solve(["John", "Bob", "Christina", "Ema"]);