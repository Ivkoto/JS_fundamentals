function calcCone(r, h) {
    let volume = Math.PI * Math.pow(r, 2) * (h / 3)
    let surfaceArea = Math.PI * r * (r + Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2)))

    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${surfaceArea.toFixed(4)}`)
}

calcCone(3, 5)