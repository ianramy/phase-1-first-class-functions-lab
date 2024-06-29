// Code your solution in this file!
// Function returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

// Function returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

// Array selectingDrivers containing both returnFirstTwoDrivers and returnLastTwoDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function createFareMultiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

// Function fareDoubler using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// Function fareTripler using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// Function selectDifferentDrivers
function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
}