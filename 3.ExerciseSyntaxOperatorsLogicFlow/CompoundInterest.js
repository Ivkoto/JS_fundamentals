function totalAccumulatedValue(array){
    let principalSum = array[0]
    let interestRate = array[1] / 100
    let compoundingPeriod = 12 / array[2]
    let totalTimespan = array[3]

    let f = principalSum * Math.pow(1 + interestRate / compoundingPeriod,compoundingPeriod * totalTimespan)
    console.log(f.toFixed(2))
}

totalAccumulatedValue([1500, 4.3, 3, 6])