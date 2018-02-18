function quadraticEquation(a, b, c) {
    let descriminant = Math.pow(b, 2) - 4 * a * c
    if (descriminant < 0) {
        console.log('No')
    } else if (descriminant === 0) {
        console.log(-b / (2 * a))
    } else {
        let x1 = (-b + Math.sqrt(descriminant)) / (2 * a)
        let x2 = (-b - Math.sqrt(descriminant)) / (2 * a)
        if (x1 > x2) {
            console.log(x2)
            console.log(x1)
        } else {
            console.log(x1)
            console.log(x2)
        }
    }
}

quadraticEquation(6, 11, -35)
quadraticEquation(1, -12, 36)
quadraticEquation(5, 2, 1)