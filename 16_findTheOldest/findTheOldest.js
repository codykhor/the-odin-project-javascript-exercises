const findTheOldest = function (array) {
    return array.reduce((oldest, current) => {
        const currentYear = new Date().getFullYear()

        const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth

        return (currentAge > oldestAge ? current : oldest)
    })
};

// Do not edit below this line
module.exports = findTheOldest;
