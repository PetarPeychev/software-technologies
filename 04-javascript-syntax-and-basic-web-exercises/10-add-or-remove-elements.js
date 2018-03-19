function addOrRemoveElements(commands) {
    let array = [];
    for (let command of commands) {
        let currentCommand = command.split(" ");
        if (currentCommand[0] === "add") {
            array.push(currentCommand[1]);
        }
        else {
            array.splice(currentCommand[1], 1);
        }
    }
    for (let element of array) {
        console.log(element);
    }
}