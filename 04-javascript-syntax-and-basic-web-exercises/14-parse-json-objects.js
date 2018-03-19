function parseJSON(args) {
    let array = [];
    for (let arg of args) {
        array.push(JSON.parse(arg));
    }
    for (let obj of array) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                console.log(capitalizeFirst(key) + ": " + obj[key]);
            }
        }
    }

    function capitalizeFirst(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
}