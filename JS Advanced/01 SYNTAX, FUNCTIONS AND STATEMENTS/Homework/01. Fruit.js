function solve(fruit, weightinGram, priceKg) {
    let weight = weightinGram / 1000;
    let money = priceKg * weight;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
};

solve('apple', 1563, 2.35);