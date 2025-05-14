const palindromes = function (text) {
    const formatText = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replace(/\s+/g, "")
    const reversed = formatText.split('').reverse().join('')
    return reversed.toLowerCase() === formatText.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
