function printLines(args) {
    for (let line of args) {
        if (line === 'Stop') break;
        console.log(line);
    }
}