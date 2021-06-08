function solve(x1, y1, x2, y2) {

    let distance = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    let firstChecke = `{${x1}, ${y1}} to {0, 0} is `;
    let secondChecke = `{${x2}, ${y2}} to {0, 0} is `;
    let thirdChecke = `{${x1}, ${y1}} to {${x2}, ${y2}} is `;

    console.log(Number.isInteger(distance(x1, y1, 0, 0)) ?
        `${firstChecke}valid` : `${firstChecke}invalid`);

    console.log(Number.isInteger(distance(x2, y2, 0, 0)) ?
        `${secondChecke}valid` : `${secondChecke}invalid`);

    console.log(Number.isInteger(distance(x1, y1, x2, y2)) ?
        `${thirdChecke}valid` : `${thirdChecke}invalid`);
};
solve(2, 1, 1, 1);