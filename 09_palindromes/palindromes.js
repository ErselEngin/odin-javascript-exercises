const palindromes = function (text) {

    const string = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    return string === string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
