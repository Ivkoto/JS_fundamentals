function rew(arr) {
    let initialSum = arr[0].reduce((a, b) => a + b, 0);

    for (let row = 1; row < arr.length; row++) {
        let rowSum = arr[row].reduce((a, b) => a + b, 0)
        if (rowSum !== initialSum) {
            return false;
        }
    }

    for (let elemIndex = 0; elemIndex < arr[0].length; elemIndex++) {
        let colSum = 0;
        for (let colIndex = 0; colIndex < arr.length; colIndex++) {
            colSum += arr[colIndex][elemIndex]
        }
        if (colSum !== initialSum) {
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