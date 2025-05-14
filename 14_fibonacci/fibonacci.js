const fibonacci = function(count) {
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
    if (count < 0) return "OOPS"
    if (typeof count !== 'number') {
        count = parseInt(count)
    }
    if (count === 0) return 0
    let first = 1
    let second = 0

    for ( let i = 2; i <= count; i++) {
        let current = first + second
        second = first
        first = current
    }
    return first
};

// Do not edit below this line
module.exports = fibonacci;
