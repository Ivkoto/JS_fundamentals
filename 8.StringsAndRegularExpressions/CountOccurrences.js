function test(target, text){
    let counter = 0;
    let curIndex = 0;

    while (curIndex !== -1){
        curIndex = text.indexOf(String(target));
        if (curIndex !== -1) {
            counter++;
            curIndex++;
            text = text.substr(curIndex);
        }
    }
    return counter;
}

console.log(test('the', 'The quick brown fox jumps over the lay dog.'));
console.log(test('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));