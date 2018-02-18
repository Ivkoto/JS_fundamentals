function binaryLog(nums) {
    let results = new Array()
    for (let index in nums) {
        let result = Math.log2(nums[index])
        results.push(result)
    }
    return results
}

console.log(binaryLog(15, 25, 5, 4))