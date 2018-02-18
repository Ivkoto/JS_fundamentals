function firstLastNumb(arr){
    let k = Number(arr.shift())
    console.log(arr.slice(0, k).join(' '))
    console.log(arr.slice(arr.length - k).join(' '))
}

firstLastNumb([3, 6, 7, 8, 9])