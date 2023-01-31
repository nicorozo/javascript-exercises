const sumAll = function (a, b) {


    if (typeof (a) !== "number" || typeof (b) !== "number") {

        return "ERROR"
    } if (a >= 0 && b >= 0) {
        if (a < b) {

            return (b * (b + 1) / 2)
        } if (a > b) {

            return (a * (a + 1) / 2)
        }
    } else

        return "ERROR"


};

// Do not edit below this line
module.exports = sumAll;
//a 1 b 4b