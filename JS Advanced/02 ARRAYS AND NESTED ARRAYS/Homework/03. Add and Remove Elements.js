function solve(arr) {
    let initialNum = 1;
    let output = [];
    
    for (const command of arr) {
        if (command === 'add') {
            output.push(initialNum);
            initialNum++;
        } else if (command === 'remove') {
            output.pop();
            initialNum++;

        }
    }

    if(output.length<=0){
        output.push('Empty')
    }

    return output.join('\n');
};

console.log(solve(['remove', 
'remove', 
'remove']

))
