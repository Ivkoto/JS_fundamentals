function censor(text, arr){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let dashes = '-'.repeat(element.length);
    text = text.replace(new RegExp(`${element}`, 'g'), dashes);
    }
    return text;
}
console.log(censor('roses are red, violets are blue', [', violets are', 'red']))

//2nd method

function censorer (text, wordsForReplace){
    wordsForReplace.forEach(word => {        
        text = text.split(word).join('-'.repeat(word.length))
    });
    return text;
}

console.log(censorer('roses are red, violets are blue', [', violets are', 'red']))
