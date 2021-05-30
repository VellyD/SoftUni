function smalles2Number(arr) {

    let output = arr
        .sort((a, b) => a - b)
        .splice(0, 2)

        return output.join(" ");
};


console.log(smalles2Number([10, 20, 20, 30, 5]));

