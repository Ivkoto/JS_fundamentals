function tripLenght(input) {
    let p1 = {
        x: input[0],
        y: input[1]
    }
    let p2 = {
        x: input[2],
        y: input[3],
    }
    let p3 = {
        x: input[4],
        y: input[5]
    }

    let distace = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    let p1p2distance = distace(p1.x, p1.y, p2.x, p2.y)
    let p2p3distance = distace(p2.x, p2.y, p3.x, p3.y)
    let p3p1distance = distace(p3.x, p3.y, p1.x, p1.y)
    
    let currDist = 0

    if (p1p2distance <= p2p3distance && p2p3distance <= p3p1distance) {   
        currDist = p1p2distance + p2p3distance     
        console.log(`1->2->3: ${currDist}`)
    } else if (p2p3distance <= p3p1distance && p3p1distance <= p1p2distance) {
        currDist = p3p1distance + p2p3distance
        console.log(`1->3->2: ${currDist}`)
    } else {
        currDist = p1p2distance + p3p1distance
        console.log(`2->1->3: ${currDist}`)
    }
}

tripLenght([0, 0, 2, 0, 4, 0])
tripLenght([5, 1, 1, 1, 5, 4])
tripLenght([-1, -2, 3.5, 0, 0, 2])