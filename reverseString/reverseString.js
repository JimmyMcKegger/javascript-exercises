const reverseString = function(str) {
    newString = str.split('').reverse().join('');
    return newString;
}

module.exports = reverseString
