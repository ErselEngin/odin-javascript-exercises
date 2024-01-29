const fibonacci = function (index) {

    if (index < 0) return "OOPS";
    if (typeof index != "number") {
        index = parseInt(index);
    }

    const fibSeq = [0, 1];

    for (let i = 2; i <= index; i++) {
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }

    return fibSeq[index];
};

// Do not edit below this line
module.exports = fibonacci;
