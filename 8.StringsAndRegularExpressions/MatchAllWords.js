function checkMatching(text) {
    let regx = /[\w\d_]+/g;

    let result = text.match(regx);

    return result.join('|');
}

console.log(checkMatching('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));