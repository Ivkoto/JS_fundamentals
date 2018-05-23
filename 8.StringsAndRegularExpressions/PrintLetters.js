function printLetters(inputStr){
    let textArr = inputStr.split('');
    for (let i = 0; i < textArr.length; i++) {
        const element = textArr[i];
        console.log(`str[${i}] -> ${textArr[i]}`)
    }
}

printLetters('Hello, World!');
printLetters('SoftUni');