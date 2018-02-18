function rounding([number, precision]){
   //let reducedPrecision = precision < 15 ? precision : 15
   if (precision > 15) {
       precision = 15
   }
   number = Number(number).toFixed(precision)
   console.log(Number(number))
}

rounding([10.5, 3])