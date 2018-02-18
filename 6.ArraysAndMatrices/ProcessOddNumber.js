function processOdd(arr) {
    arr = arr.filter((e, index) => index % 2 !== 0).map(x => x * 2).reverse()
    console.log(arr)
}

processOdd([10, 15, 20, 25])