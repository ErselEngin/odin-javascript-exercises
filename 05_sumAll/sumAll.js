const sumAll = function (n1, n2) {

    let bigN = 0;
    let smallN = 0;

    if (n1 > n2) {

        bigN = n1;
        smallN = n2;
    }
    else {
        
        bigN = n2;
        smallN = n1;
    }

    if (typeof n1 === "number" && typeof n2 === "number" && n1 > 0 && n2 > 0) {

        let sum = 0;
        for (let i = smallN; i <= bigN; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
