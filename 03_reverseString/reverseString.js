const reverseString = function(string) {
    const letters = [];
    recursiveReverse(string, letters, string.length - 1);
    return letters.join("");
};

function recursiveReverse(string, letters, endIdx) {
    if (endIdx < 0) {
        return;
    }

    let lastLetter = string.charAt(endIdx);
    letters.push(lastLetter);
    recursiveReverse(string, letters, endIdx - 1);
}

// Do not edit below this line
module.exports = reverseString;
