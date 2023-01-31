const ftoc = function (F) {
  C = (F - 32) * 5 / 9;
  return oneDecimal(C);
};

const ctof = function (C) {
  const F = (C * 9 / 5) + 32;
  return oneDecimal(F);
};
function oneDecimal(number) {
  const oneDecNum = Math.round(number * 10) / 10
  return oneDecNum;
}
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
