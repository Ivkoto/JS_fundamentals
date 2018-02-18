function colorfulNumbers(numb){
    let result = "<ul>\n"

    for (let i = 1; i <= numb; i++) {
        let color = i % 2 === 0 ? "blue" : "green"
        result += `  <li><span style='color:${color}'>${i}</span></li>\n`
    }

    result += "</ul>"

    return result
}

console.log(colorfulNumbers(10))