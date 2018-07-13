function split(inputString){
    return inputString.split(/[\s.();,]+/).join('\n');
}

console.log(split('let sum = 4 * 4,b = "wow";'));
console.log(split('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}'));