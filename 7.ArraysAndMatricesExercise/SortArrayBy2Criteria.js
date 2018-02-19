function sortArray(arr) {
    let sortedArray = []
    sortedArray = arr.sort((a,b) => a.localeCompare(b)).sort((a, b) => a.length - b.length)
    console.log(sortedArray.join('\n'))
}

//sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortArray(['test', 'Deny', 'omen', 'Default'])