function sollution(numbersArray) {
    const Xmin = 10
    const Xmax = 50
    const Ymin = 20
    const Ymax = 80
    const Zmin = 15
    const Zmax = 50

    for (let i = 0; i < numbersArray.length; i += 3) {
        console.log(isInside(numbersArray[i], numbersArray[i + 1], numbersArray[i + 2]))
    }

    function isInside(x, y, z) {
        if (x >= Xmin && x <= Xmax && y >= Ymin && y <= Ymax && z >= Zmin && z <= Zmax) {
            return'inside'
        } else {
            return 'outside'
        }
    }
}

sollution([8, 20, 22])
sollution([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43])