function cooking(input) {
    let number = input[0]
    let operation = ''
    for (let i = 1; i < input.length; i++) {
        operation = input[i]
        printOperrationResult()
    }

    function printOperrationResult() {
        switch (operation) {
            case 'chop':
                number /= 2
                break
            case "dice":
                number = Math.sqrt(number)
                break
            case 'spice':
                number ++;
                break
            case 'bake':
                number *= 3
                break
            case 'fillet':
                number *= 0.8
        }
        console.log(number)
    }
}

cooking([32, 'chop', 'chop', 'chop', 'chop', 'chop'])
cooking([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])