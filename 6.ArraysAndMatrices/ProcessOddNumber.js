function processOdd(arr) {
    return arr
        .filter((e, index) => index % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(' ')
};

processOdd([10, 15, 20, 25]);