function calcSumAndVAT(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    console.log("sum = " + sum)
    console.log("VAT = " + sum * 0.2)
    console.log("total = " + sum * 1.2)
}

calcSumAndVAT([5, 3, 2.5, 8.6])