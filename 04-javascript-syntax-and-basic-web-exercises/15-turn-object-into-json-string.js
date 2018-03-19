function obectsToJSON(args) {
    let obj = {};
    for (let arg of args) {
        let currentArg = arg.split(" -> ");
        if (isNaN(currentArg[1]) === false) currentArg[1] = Number(currentArg[1]);
        obj[currentArg[0]] = currentArg[1];
    }
    console.log(JSON.stringify(obj));
}