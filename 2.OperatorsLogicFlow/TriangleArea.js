function calcArea(a, b, c) {
    let halfPerimether = (a + b + c) / 2
    let area = Math.sqrt(halfPerimether * (halfPerimether - a) * (halfPerimether - b) * (halfPerimether - c))
    console.log(area)
}

calcArea(2, 3.5, 4)