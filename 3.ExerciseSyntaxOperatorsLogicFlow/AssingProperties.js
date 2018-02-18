function setProperties(elements){
    let obj = {}
    obj[elements[0]] = elements[1]
    obj[elements[2]] = elements[3]
    obj[elements[4]] = elements[5]

    console.log(obj)
}

setProperties(['name', 'Pesho', 'age', '23', 'gender', 'male'])