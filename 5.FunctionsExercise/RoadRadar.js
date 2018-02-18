function speedRadar(input) {
    let currSpeed = input[0]
    let area = input[1]
    let speedLimit = getLimit(area)
    let infraction = getInraction(currSpeed, speedLimit)
    if (infraction) {
        console.log(infraction)
    }
    
    
    function getLimit(area) {
        switch (area) {
            case 'motorway':
                return 130
            case 'interstate':
                return 90
            case 'city':
                return 50
            case 'residential':
                return 20
        }
    }    
    
    function getInraction(speed, limit) {
        let speedDifferense = speed - limit
        if (speedDifferense <= 0) {
            return false
        } else {
            if (speedDifferense <= 20) {
                return 'speeding'
            }
            if (speedDifferense <= 40) {
                return 'excessive speeding'
            }
            if (speedDifferense > 40) {
                return 'reckless driving'
            }
            
        }
    }
}

speedRadar([120, 'interstate'])