function solve(number, ...commands) {
    let initialNum = Number(number);

    for (const command of commands) {
        switch (command) {
            case 'chop':
             console.log(initialNum  /= 2)
                break;
            case 'dice':
                console.log(initialNum = Math.sqrt(initialNum));
                break;
            case 'spice':
                console.log(initialNum += 1);
                break;
            case 'bake':
                console.log(initialNum *= 3);
                break;
            case 'fillet':
                console.log(initialNum *= 0.80);
                break;

        }
    }
    
};

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');