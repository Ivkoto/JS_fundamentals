function biggestElement(matrix) {
    return matrix.map(arr => arr.sort((a, b) => a < b)[0])
        .sort((a, b) => a < b)[0]
}

console.log(biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]))

function biggestElement2(matrix) {
    let biggestValue = Number.NEGATIVE_INFINITY

    matrix.forEach(r =>
        r.forEach(c => biggestValue = Math.max(biggestValue, c)));

    return biggestValue
}

console.log(biggestElement2([
    [20, 50, 10],
    [8, 33, 145]
]))