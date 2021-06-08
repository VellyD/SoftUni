function solve(arr) {
    let townsObj = {};

    arr.forEach(info => {
        let [town, population] = info.split(' <-> ');

        if (townsObj[town]) {
            townsObj[town] += Number(population);
        } else {
            townsObj[town] = Number(population);
        }
    });

    return Object.entries(townsObj).forEach(e => console.log(e.join(' : '))) ;
};
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);