function addPosition(arr) {
    return arr
        .filter((elem, index) => {return index % 2 !== 0})
        .map(e => e * 2)
        .reverse()
        .join(' ')
};

console.log(addPosition([10, 15, 20, 25]));
console.log(addPosition([3, 0, 10, 4, 7, 3]));