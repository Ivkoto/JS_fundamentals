function stepPrint(elemArr) {
    let step = Number(elemArr.pop())
    let currIndex = 0

    while (currIndex < elemArr.length) {
        console.log(elemArr[currIndex])
        currIndex += step
    }
}

stepPrint([5, 20, 31, 4, 20, 2])
stepPrint(['dsa', 'asd', 'test', 'tset', 2])
stepPrint([1, 2, 3, 4, 5, 6])


function printByStep(arr){
    let step = arr.pop()
    let result = arr.filter((e, i) => i % step === 0)
    console.log(result.join('\n'))
}
printByStep([5, 20, 31, 4, 20, 2])