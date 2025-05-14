const removeFromArray = function(array, ...arg) {
    let newArr = []
    newArr = array.filter((x) => (!arg.includes((x))))
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
