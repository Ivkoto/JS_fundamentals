function aggregate(input){
    let towns = [], sum = 0;

    for (const couple of input) {
        let townData = couple.split('|').filter(e => e !== '');
        towns.push(townData[0].trim());
        sum += Number(townData[1].trim());
    }

    return towns.join(', ') + '\n' + sum;
}

console.log(aggregate([
'| Sofia           | 300',
'| Veliko Tarnovo  | 500',
'| Yambol          | 275']));