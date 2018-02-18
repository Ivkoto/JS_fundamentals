function lastMont(dateString){
    let days = dateString[0]
    let month = dateString[1]
    let year = dateString[2]

    let date = new Date(year, month - 1, 0)
    console.log(date.getDate())
}


