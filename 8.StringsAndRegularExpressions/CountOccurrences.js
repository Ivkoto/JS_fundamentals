function CountOccurrences(target, text) {
    let counter = 0;
    let curIndex = 0;
    text = text.split(/\W+/).filter(e => e !== '');
    while (curIndex !== -1) {
        curIndex = text.indexOf(String(target));
        if (curIndex !== -1) {
            counter++;
            curIndex++;
            text = text.substr(curIndex);
        }
    }
    return counter;
}


//2nd option

function CountOccurrences(target, text) {
    let counter = 0;
    while (true) {
        let curIndex = text.indexOf(target);
        if (curIndex < 0) {
            break;
        }
        counter++;
        text = text.substr(curIndex + 1);
    }
    return counter;
}

console.log(CountOccurrences('the', 'The quick brown fox jumps over the lay dog.'));
console.log(CountOccurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));