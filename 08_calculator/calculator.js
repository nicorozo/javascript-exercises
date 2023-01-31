const add = function () {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
};

const subtract = function () {
  let total = 0;
  for (let i = 1; i < arguments.length; i++) {
    total = arguments[0] - arguments[i]
  }
  return total
};

const sum = function (numbers) {

  if (numbers !== []) {

    const initialVal = 0;
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialVal);
    return sum

  } else return false
};

const multiply = function (number) {

  let total = number[0];
  for (i = 1; i < number.length; i++) {

    total *= number[i];
  }
  return total;
};

const power = function (a, b) {

  const total = Math.pow(a, b)
  return total;
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  }
  let total = number;
  for (let i = number - 1; i > 0; i--) {

    total *= i
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
