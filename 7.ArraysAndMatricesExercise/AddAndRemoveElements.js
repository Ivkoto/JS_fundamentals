function addRemoveElements(commands) {
    let currentNumb = 0
    let result = []
    commands.forEach(cmd => {
        switch (cmd) {
            case 'add':
                currentNumb++
                result.push(currentNumb)
                break

            case 'remove':
                currentNumb++
                result.pop()
                break
        }
    });

    if (result.length > 0) {
        result.forEach(element => {
            console.log(element)
        });
    } else {
        console.log('Empty')
    }
}

addRemoveElements(['add', 'add','remove' ,'add', 'add'])
addRemoveElements(['remove', 'remove', 'remove'])