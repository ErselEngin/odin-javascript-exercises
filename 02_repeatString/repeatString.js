const repeatString = function (hey, number) {
    let repeat = "";

    if (number < 0) {
        return "ERROR";
    }
    else {
        for (let i = 0; i < number; i++) {
            repeat += hey;
        }

        return repeat;
    }
};

// Do not edit below this line
module.exports = repeatString;
