function calcDistance(array) {
    let point1 = {
        x: array[0],
        y: array[1],
        z: array[2]
    }
    let point2 = {
        x: array[3],
        y: array[4],
        z: array[5]
    }

    let distance = Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2 + (point2.z - point1.z) ** 2)
    console.log(distance)
}

calcDistance([1, 1, 0, 5, 4, 0])
calcDistance([3.5, 0, 1, 0, 2, -1])