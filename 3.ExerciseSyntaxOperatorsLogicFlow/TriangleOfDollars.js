function printTriangle(n){
    for (let i = 1; i <= n; i++) {
        console.log("$".repeat(i))
        console.log(new Array(i+1).join('$'))
    }
}

printTriangle(3)