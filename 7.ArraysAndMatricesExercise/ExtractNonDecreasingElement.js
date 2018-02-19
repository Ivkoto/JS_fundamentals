function extractNonDecreasing(arr) {
    let biggest = Number.NEGATIVE_INFINITY
    let filteredArray = arr.map(Number).filter((e) => {
        if (e > biggest) {
            biggest = e
            return true
        }
        return false
    })
    console.log(filteredArray.join('\n'))
}

extractNonDecreasing([])