function solve(arg){

    if(typeof arg === 'number'){
        let area = Math.PI * arg* arg
        console.log(area.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`);
    };

};

solve(5);
solve('name');
