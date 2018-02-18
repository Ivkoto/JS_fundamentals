function multiplicationTable(n) {
    let table = "<table border='1'>"
    let header = "<tr><th>x</th>"

    for (let i = 1; i <= n; i++) {
        header += `<th>${i}</th>`
    }
    header += "</tr>"

    let body = ""
    for (let j = 1; j <= n; j++) {
        body += `<tr><th>${j}</th>`
        for (let k = 1; k <= n; k++) {
            body += `<td.${j * k}</td>`
        }
        body += "</tr>"
    }

    table += header
    table += body
    table += "</table>"
    console.log(table)
}

multiplicationTable(5)