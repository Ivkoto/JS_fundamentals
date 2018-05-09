function rew(matrix) {
    let initialSum = matrix[0].reduce((a, b) => a + b);

    for (let row = 1; row < matrix.length; row++) {
        let curSum = matrix[row].reduce((a, b) => a + b);
        if (curSum !== initialSum) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        curSum = 0;
        for (let elemIndex = 0; elemIndex < matrix.length; elemIndex++) {
            curSum += matrix[col][elemIndex];            
        }
        if (curSum !== initialSum) {
            return false;
        }
    }
    return true;
};

console.log(rew([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]))

console.log(rew([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]))

console.log(rew([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]))