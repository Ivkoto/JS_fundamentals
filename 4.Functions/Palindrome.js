function isPalindrome(inputString) {
    return inputString.split('').reverse().join("") === inputString
}

console.log(isPalindrome("aaacaaa"))