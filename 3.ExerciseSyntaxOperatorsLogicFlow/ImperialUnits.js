function convertUnits(inches){
    let feet = Math.floor(inches / 12)
    let inch = inches % 12

    console.log(`${feet}'-${inch}"`)
}

convertUnits(11)