const removeFromArray = function (numbersArray, ...arg) {

    const result = numbersArray.filter((x) => !arg.includes(x));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
