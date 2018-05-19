function makeOrbit(arr){
    
    let [width, height, x, y] = arr

    let matrix = fillMatrixWithZeros(width, height);
    matrix[x][y] = 1;
    let nextNumber = 2;

    for (let rowIdx = x; rowIdx < 4; rowIdx++) {
        const element = matrix[rowIdx];
        
    }

    printMatrix(matrix);

    function printMatrix(matrix){
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

makeOrbit([5,5,2,2])
makeOrbit([4,4,0,0])