function objectArray(args) {
    let array = [];
    for (let arg of args) {
        let currentArg = arg.split(" -> ");
        let currentObj = {name:currentArg[0], age:currentArg[1], grade:currentArg[2]};
        array.push(currentObj);
    }
    for (let obj of array) {
        console.log("Name: " + obj["name"]);
        console.log("Age: " + obj["age"]);
        console.log("Grade: " + obj["grade"]);
    }
}