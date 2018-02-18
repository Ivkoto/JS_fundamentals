function lastK(n, k){
    let result = [1]
    for (let i = 1; i < n; i++) {
        result[i] = result
            .slice(Math.max(0, result.length - k), i + k)
            .reduce((a, b) => {return a + b}, 0)
    }
    return result
}

console.log(lastK(8, 2))