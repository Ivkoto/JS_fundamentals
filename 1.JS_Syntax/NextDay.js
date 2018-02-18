function nextDay(year, month, day) {
    let oneDay = 24 * 60 * 60 * 1000
    let date = new Date(year, month - 1, day)
    let nextDate = new Date(date.getTime() + oneDay)

    return `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${nextDate.getDate()}`
}

console.log(nextDay(2016, 9, 30))