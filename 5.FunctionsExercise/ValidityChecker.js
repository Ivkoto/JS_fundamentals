'use strict'

function isValidDistance(input){
    let p1 = {x: input[0], y: input[1] }
    let p2 = {x: input[2], y: input[3] }

    let p1To00Distance = Math.sqrt(Math.pow(p1.x, 2) + Math.pow(p1.y, 2))
    let p2To00Distance = Math.sqrt(Math.pow(p2.x, 2) + Math.pow(p2.y, 2))
    let distanceBetweenPoints = Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2))

    if (p1To00Distance === parseInt(p1To00Distance)) {
        console.log(`{${p1.x}, ${p1.y}} to {0, 0} is valid`)
    } else {
        console.log(`{${p1.x}, ${p1.y}} to {0, 0} is invalid`)
    }

    if (p2To00Distance === parseInt(p2To00Distance)) {
        console.log(`{${p2.x}, ${p2.y}} to {0, 0} is valid`)
    } else {
        console.log(`{${p2.x}, ${p2.y}} to {0, 0} is invalid`)
    }

    if (distanceBetweenPoints === parseInt(distanceBetweenPoints)) {
        console.log(`{${p1.x}, ${p1.y}} to {${p2.x}, ${p2.y}} is valid`)
    } else {
        console.log(`{${p1.x}, ${p1.y}} to {${p2.x}, ${p2.y}} is invalid`)
    }
}

isValidDistance([3, 0, 0, 4])
isValidDistance([2, 1, 1, 1])