const removeFromArray = function(array, ...args) {
    const valuesToRemove = new Set(args);
    const resultArray = [];
    for (const item of array) {
        if (!valuesToRemove.has(item)) {
            resultArray.push(item);
        }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
