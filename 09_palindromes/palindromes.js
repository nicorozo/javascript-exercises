const palindromes = function (string) {
    string = string.toLowerCase();

    string = string.replace(/[./ /,!]/g, "");

    const reversed = string.split('').reverse().join('');

    if (string === reversed) {
        return true
    } else { return false }

    console.log(string, reversed)


}
// Do not edit below this line
module.exports = palindromes;
