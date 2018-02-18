function sollution(inputString){
    return String(inputString)
    .split(/\W+/)
    .filter(w => w !== '')
    .join(', ')
    .toUpperCase()
}

console.log(sollution('Hi, how are you'))