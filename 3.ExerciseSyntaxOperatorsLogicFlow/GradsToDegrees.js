function calcDegrees(grads){
    let gradsOut = grads % 400
    let degree = gradsOut * 0.9
    let result = degree > 0 ? degree : 360 + degree

    console.log(result)
}

calcDegrees(100)
calcDegrees(400)
calcDegrees(850)
calcDegrees(-50)