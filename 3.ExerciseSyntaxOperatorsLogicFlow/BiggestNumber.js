function calcBiggest(numbers) {
    let biggest = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        const curNumber = numbers[i];
        biggest = biggest > curNumber ? biggest : curNumber
    }
    console.log(biggest)
}
calcBiggest([5, -2, 7])

function calcTest(numbers) {
    let biggerNum = numbers[0]
    numbers.forEach(num => {
        if (biggerNum < num) {
            biggerNum = num
        }
    })
    console.log(biggerNum)
}

calcTest([5, -2, 7])

