function keyValuePairs(args) {
    let array = [];
    for (let arg of args) {
        let currentArg = arg.split(" ");
        if (currentArg.length == 1){
            if (array[currentArg[0]] === undefined) console.log("None");
            else {
                console.log(array[currentArg[0]]);
            }
            break;
        }
        array[currentArg[0]] = currentArg[1];
    }
}