function extract(text){
    let result = [];
    while (true) {
        let startIdx = text.indexOf('(');
        let endIdx = text.indexOf(')');
        if (startIdx < 0 || endIdx < startIdx) {
            break;
        }
        result.push(text.substring(startIdx + 1, endIdx));
        text = text.substr(endIdx + 1);
    }
    return result.join(', ');
}

console.log(extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'))