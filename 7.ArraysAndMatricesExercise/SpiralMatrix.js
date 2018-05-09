function spiralMatrix(rows, cols) {
    let initialNum = 1;
    const targerNum = Number(rows) * Number(cols);
    let matrix = fillMatrixWithZeros(rows, cols);
    let curRow = 0;
    let curCol = 0;

    while (initialNum < targerNum) {
        for (let idx = 0; idx < cols; idx++) {
            matrix[curRow][curCol] = initialNum++;
            //ToDo
        }
    }

    return matrix;

    function printMatrix(matrix) {
        console.log(matrix.map(e => e.join(' ')).join('\n'));
    }

    function fillMatrixWithZeros(rows, cols) {
        let matrix = [];
        for (let row = 0; row < rows; row++) {
            matrix.push('0'.repeat(cols).split('').map(Number));
        }
        return matrix;
    }
}

console.log(spiralMatrix(5, 5));