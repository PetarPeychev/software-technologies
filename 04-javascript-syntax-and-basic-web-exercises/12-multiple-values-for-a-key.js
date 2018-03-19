function keyValuePairs(args) {
    let array = [];
    for (let arg of args) {
        let currentArg = arg.split(" ");
        if (currentArg.length == 1){
            if (array[currentArg[0]] === undefined) console.log("None");
            else {
                for (let value of array[currentArg[0]]) {
                    console.log(value);
                }
            }
            break;
        }
        if (typeof array[currentArg[0]] != "object") array[currentArg[0]] = [];
        array[currentArg[0]].push(currentArg[1]);
    }
}