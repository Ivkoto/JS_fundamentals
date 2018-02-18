function aggragateFunc(arr) {
    aggragate(0, (initValue, curArrElem) => initValue + curArrElem)
    aggragate(0, (initValue, curArrElem) => initValue + 1 / curArrElem)
    aggragate('', (concatString, curArrElem) => String(concatString).concat(curArrElem))

    function aggragate(initialValue, arrowFunc) {
        for (let i = 0; i < arr.length; i++) {
            initialValue = arrowFunc(initialValue, arr[i])
        }
        console.log(initialValue)
    }
}

aggragateFunc([1, 2, 3])
aggragateFunc([2, 4, 8, 16])