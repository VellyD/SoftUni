function solution(num) {
    let number = Number(num);

    function add(n) {
        return number + n;
    }

    return add;
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));