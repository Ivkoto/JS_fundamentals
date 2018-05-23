function concatReverse(strArr){
    return  strArr.join('').split('').reverse().join('');
}

console.log(concatReverse(['I', 'am', 'student']));
console.log(concatReverse(['race', 'car']));