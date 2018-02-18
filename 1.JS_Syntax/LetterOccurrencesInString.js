function countLetter (word, letter){
    let counter = 0    
    for (let i = 0; i < word.length; i++) {
        let currChar = word[i]
        if (currChar === letter) {
            counter ++
        }
    }
    return counter
}

console.log(countLetter("address", "d"))