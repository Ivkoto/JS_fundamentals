function oddEven(number){
    if (number % 2 === 0) {
        console.log("even")
    } else if (number === Math.round(number)){
        console.log("odd")
    } else {
        console.log("invalid")
    }
}

oddEven(1.5)