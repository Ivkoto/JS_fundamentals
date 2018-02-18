function negaivePositiveRestruct(arr) {

    arr = arr.map(Number)
    let orderedArr = []

    arr.forEach(element => {
        element >= 0 ? orderedArr.push(element) : orderedArr.unshift(element)
    });

    return orderedArr.join('\n')
}

console.log(negaivePositiveRestruct([3, -2, 0, -1]))