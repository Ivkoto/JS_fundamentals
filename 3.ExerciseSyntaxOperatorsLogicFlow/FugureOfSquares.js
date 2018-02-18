function drawSquare(n) {
    if (n == 2) {
        console.log("+".repeat(3))
        return;
    }

    let dashes = n - 2    

    for (let j = 0; j < 2; j++) {
        console.log(`+${'-'.repeat(dashes)}+${'-'.repeat(dashes)}+`)
        let pypes = n % 2 === 0 ? (n - 4) / 2 : (n - 3) / 2
        for (let i = 0; i < pypes; i++) {
            console.log(`|${' '.repeat(dashes)}|${' '.repeat(dashes)}|`)
        }
    }
    console.log(`+${'-'.repeat(dashes)}+${'-'.repeat(dashes)}+`)
}

drawSquare(7)