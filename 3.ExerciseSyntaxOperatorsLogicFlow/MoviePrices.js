function moviePrice([movieTitle, day]) {
    let movies = ["the godfather", "schindler's list", "casablanca", "the wizard of oz"]

    let godfatherPrices = {
        monday: 12,
        tuesday: 10,
        wednesday: 15,
        thursday: 12.50,
        friday: 15,
        saturday: 25,
        sunday: 30
    }
    let schindlerListPrices = {
        monday: 8.50,
        tuesday: 8.50,
        wednesday: 8.50,
        thursday: 8.50,
        friday: 8.50,
        saturday: 15,
        sunday: 15
    }
    let casablancaPrices = {
        monday: 8,
        tuesday: 8,
        wednesday: 8,
        thursday: 8,
        friday: 8,
        saturday: 10,
        sunday: 10
    }
    let theWizardOzPrices = {
        monday: 10,
        tuesday: 10,
        wednesday: 10,
        thursday: 10,
        friday: 10,
        saturday: 15,
        sunday: 15
    }

    let currMovie = String(movieTitle).toLowerCase()
    let curDay = String(day).toLowerCase()

    switch (currMovie) {
        case "the godfather":
            if (!(godfatherPrices.hasOwnProperty(curDay))) {
                return 'error'
            } else {
                return godfatherPrices[curDay]
            }

        case "schindler's list":
            if (!(schindlerListPrices.hasOwnProperty(curDay))) {
                return 'error'
            } else {
                return schindlerListPrices[curDay]
            }

        case "casablanca":
            if (!(casablancaPrices.hasOwnProperty(curDay))) {
                return 'error'
            } else {
                return casablancaPrices[curDay]
            }

        case "the wizard of oz":
            if (!(theWizardOzPrices.hasOwnProperty(curDay))) {
                return 'error'
            } else {
                return theWizardOzPrices[curDay]
            }

        default:
            return 'error'
    }
}

console.log(moviePrice(["The Godfather", "Friday"]))
//console.log(moviePrice(["casablanca", "sunday"]))
//console.log(moviePrice(["Schindler's LIST", "monday"]))
//console.log(moviePrice(["SoftUni", "Nineday"]))
console.log(moviePrice(['The Godfather', 'Sofia']))