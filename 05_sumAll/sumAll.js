const sumAll = function(num1, num2) {
    if (!paramsValid(num1, num2)) {
        return "ERROR";
    }
    let start = (num1 < num2) ? num1 : num2;
    let end = (start === num1) ? num2 : num1;
    let sum = 0;
    for (let i = start; i <= end; i += 1) {
        sum += i;
    }
    return sum;
};

function paramsValid(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return false;
    }
    if (Math.floor(num1) !== num1 || Math.floor(num2) !== num2) {
        return false;
    }
    if (num1 < 0 || num2 < 0) {
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = sumAll;
