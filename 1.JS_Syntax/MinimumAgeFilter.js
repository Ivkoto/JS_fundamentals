function filterByAge(minAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge) {
    let firstPerson = {
        name: firstPersonName,
        age: firstPersonAge
    }
    let secondPerson = {
        name: secondPersonName,
        age: secondPersonAge
    }

    if (firstPerson.age >= minAge) {
        console.log(firstPerson)
    }
    if (secondPerson.age >= minAge) {
        console.log(secondPerson)
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9)