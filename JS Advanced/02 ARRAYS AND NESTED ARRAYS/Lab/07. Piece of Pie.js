function piceOfPie(pieFlavoursARR, targetFlavoure1, targetFlavoure2) {
    let result = []
    let isInTheList = false

    for (let pie of pieFlavoursARR) {
        
        if(pie === targetFlavoure1){
            result.push(pie)
            isInTheList = true   
            continue
        }

        if(pie === targetFlavoure2){
            result.push(pie)
            isInTheList = false
            continue
        }

        if(isInTheList){
           result.push(pie)
        }
    }
    return result
};

console.log(
piceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)
);