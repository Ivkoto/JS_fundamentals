function drawTriangle(num){
    for (let i = 1; i <= num; i++) {
        drawStars(i)
    }
    for (let j = num - 1; j > 0  ; j--) {
        drawStars(j)        
    }

    function drawStars(count){
        console.log('*'.repeat(count))
    }
}

drawTriangle(7)