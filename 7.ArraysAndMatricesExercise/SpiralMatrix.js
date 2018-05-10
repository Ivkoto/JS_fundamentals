function spiralMatrix(rows, cols) {
    let initialNum = 1;
    const targerNum = Number(rows) * Number(cols);
    let matrix = fillMatrixWithZeros(rows, cols);
    let curRow = 0;
    let curCol = 0;
    let rotations = 0;
    
    while (initialNum <= targerNum) {
        //top row
        for (let idx = rotations; idx < cols - rotations; idx++) {
            matrix[curRow][curCol++] = initialNum++;
        }

        //right col downwards
        curCol -= 1;
        for (let idx = ++curRow; idx <= rows - 1 - rotations; idx++) {
            matrix[curRow++][curCol] = initialNum++;
        }

        //bottom row leftwards
        curRow -= 1;
        for (let idx = --curCol; idx >= rotations; idx--) {
            matrix[curRow][curCol--] = initialNum++;
        }

        //left col upwards
        curCol += 1;
        for (let idx = --curRow; idx > rotations; idx--) {
            matrix[curRow--][curCol] = initialNum++;
        }

        rotations++;
        curCol++;
        curRow++;
    }

    printMatrix(matrix);

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

spiralMatrix(5, 5);