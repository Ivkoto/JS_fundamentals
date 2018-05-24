function calcTotalSym(order) {
    let products = [],
        total = 0;

    for (let i = 0; i < order.length; i++) {
        if (i % 2 === 0) {
            products.push(order[i].trim());
        } else {
            total += Number(order[i].trim());
        }
    }
    return 'You purchased ' + products.join(', ') + ' for total sum of ' + total;
}

//2nd way
function calcTotalSym(order) {
    let products = order.filter((elem, idx) => idx % 2 === 0).join(', ');
    let totalSum = order.filter((elem, idx) => idx % 2 !== 0).map(Number).reduce((a, b) => a + b);

    return `You purchased ${products} for total sum of ${totalSum}`;
}

console.log(calcTotalSym(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']));
console.log(calcTotalSym(['Cola', '1.35', 'Pancakes', '2.88']));