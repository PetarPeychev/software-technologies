function createArray(args) {
    let arrayLength = Number (args[0]);
    let array = new Array(arrayLength).fill(0);
    for (let i = 1; i < args.length; i++) {
        let currentInput = args[i].split(' - ').map(Number);
        array[currentInput[0]] = currentInput[1];
    }
    for (let element of array) {
        console.log(element);
    }
}