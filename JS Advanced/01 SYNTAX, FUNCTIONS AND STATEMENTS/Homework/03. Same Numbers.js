function solve(num) {
    num = String(num);
    let sum = num.length >0 ? Number(num[0]) : 0
    let isSame = true;

    for (let i = 0; i < num.length-1; i++) {
        let current = Number(num[i]);
        let next = Number(num[i + 1]);

        if(current !== next){
            isSame = false;
        }
        
        sum += next;
    }
    
    console.log(isSame);
    console.log(sum);
};

solve(2222222);
solve(1234);