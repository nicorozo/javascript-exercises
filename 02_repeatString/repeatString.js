const repeatString = function (a, b) {
    let stringed = "";
    if (b < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < b; i++) {


        stringed += a;

    }
    return stringed;
};

// Do not edit below this line
module.exports = repeatString;
