function modify(input) {
    let num = String(input)
    let sum = Number(0)
    while (true) {
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i])
        }
        if (sum / num.length > 5) {
            isHigherThanFive = true
            console.log(num)
            break;
        } else {
            num += 9
            sum = 0
        }
    }
}

modify(101)