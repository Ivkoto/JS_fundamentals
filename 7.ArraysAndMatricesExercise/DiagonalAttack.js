function diagonalAttaack(arr) {
    let matrix = [];
    let rightDiagonalSum = 0;
    let leftDiagonalSum = 0;

    for (let idx = 0; idx < arr.length; idx++) {
        matrix[idx] = arr[idx].split(' ').map(Number);
    }

    let counter = matrix[0].length - 1;

    for (let idx = 0; idx < matrix[0].length; idx++) {
        leftDiagonalSum += matrix[idx][idx];
        rightDiagonalSum += matrix[idx][counter--];
    }

    if (leftDiagonalSum !== rightDiagonalSum) {
        printMatrix(matrix);
    } else {
        let index1 = 0;
        let index2 = matrix[0].length - 1;
        for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
            for (let elemIdx = 0; elemIdx < matrix[rowIdx].length; elemIdx++) {
                if (elemIdx !== index1 && elemIdx !== index2) {
                    matrix[rowIdx][elemIdx] = leftDiagonalSum;
                }
            }
            index1++;
            index2--;
        }
        printMatrix(matrix);
    }
    function printMatrix(matrix) {
        console.log(matrix.map(e => e.join(' ')).join('\n'));
    }
}

diagonalAttaack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])