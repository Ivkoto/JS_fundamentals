function calculator(a, b, op) {
    let calc = function (a, b, op) {
        return op(a, b)
    }
    let add = function () { return a + b }
    let subtranct = function () { return a - b }
    let multiply = function () { return a * b }
    let divide = function () { return a / b }
    switch (op) {

        case '+':
            return calc(a, b, add)
        case '-':
            return calc(a, b, subtranct)
        case '*':
            return calc(a, b, multiply)
        case '/':
            return calc(a, b, divide)
    }
}

console.log(calculator(2, 4, '+'))
