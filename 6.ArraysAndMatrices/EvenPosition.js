function findEven(arr){
    return arr
        .filter((elem, index) => {return index % 2 === 0})
        .join(' ')
}

console.log(findEven(['20', '30', '40']))
