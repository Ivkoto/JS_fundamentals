function diagonalSum(matrix) {
    let sumDiag1 = 0
    let sumDiag2 = 0
    for (let i = 0; i < matrix[0].length; i++) {
        sumDiag1 += matrix[i][i]
        sumDiag2 += matrix[i][matrix[i].length - i - 1]
    }
    return `${sumDiag1} ${sumDiag2}`
}

console.log(diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]))