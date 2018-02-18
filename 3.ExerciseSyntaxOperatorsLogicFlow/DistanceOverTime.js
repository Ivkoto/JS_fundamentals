function distanceBetweenObjects(array){
    let V1 = array[0]
    let V2 = array[1]
    let T = array[2]
    let traveledDistance_1 = V1 * (T / 3.6)
    let traveledDistance_2 = V2 * (T / 3.6)
    console.log(Math.abs(traveledDistance_1 - traveledDistance_2))
    //console.log(`V1: ${V1} ${typeof(V1)}`)
    //console.log(`V2: ${V2} ${typeof(V2)}`)
    //console.log(`T: ${T} ${typeof(T)}`)
}

distanceBetweenObjects([0, 60, 3600])
distanceBetweenObjects([11, 10, 120])
distanceBetweenObjects([5, -5, 40])