function makeOrbit(arr) {

    let [rows, cols, x, y] = arr;
    let matrix = fillMatrixWithZeros(rows, cols);
    let nextNumber = 1;
    let circle = 1;
    matrix[x][y] = nextNumber;

    while (!isMatrixFiled(matrix)) {
        nextNumber++;
        let topX = Math.max(0, x - circle);
        let topY = Math.max(0, y - circle);
        let bottomX = Math.min(rows - 1, x + circle);
        let bottomY = Math.min(cols - 1, y + circle);

        for (let rowIdx = topX; rowIdx <= bottomX; rowIdx++) {
            for (let colIdx = topY; colIdx <= bottomY; colIdx++) {
                if (matrix[rowIdx][colIdx] === 0) {
                    matrix[rowIdx][colIdx] = nextNumber;
                }
            }
        }
        circle++;
    }

    printMatrix(matrix);

    function isMatrixFiled(matrix) {
        for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
            for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
                let element = matrix[rowIdx][colIdx];
                if (element === 0) {
                    return false
                }
            }
            return true;
        }
    }

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

//makeOrbit([5, 5, 2, 2])
//makeOrbit([4, 4, 0, 0])
makeOrbit([5, 5, 0, 2])