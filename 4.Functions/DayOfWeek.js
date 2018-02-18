function getWeekDayNumber(day){
    let weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    day = String(day).toLowerCase()
    let currIndex = weekDays.indexOf(day)
    return currIndex > -1 && currIndex ? currIndex + 1 : 'error'
}

console.log(getWeekDayNumber('Frabjoyousday'))