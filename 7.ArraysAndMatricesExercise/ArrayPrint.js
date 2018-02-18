function printArray(stringArray) {
    let delimiter = stringArray.pop()
    let firstElement = stringArray.shift()
    let outputString = firstElement

    stringArray.forEach(e => {
        outputString += delimiter + e
    });


    console.log(outputString)
}

//printArray(['One', 'Two', 'Three', 'Four', 'Five', '-'])
printArray(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_'])