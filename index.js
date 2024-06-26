// Code your solution in this file!
// Function expression for divide
const divide = function() {
    return 2000 / 100;
}

// Arrow function for square
const square = (x) => x * x;

// Arrow function for add
const add = (a, b) => a + b;

// Function to calculate distance in blocks from headquarters (42nd street)
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}

// Function to calculate distance in feet from headquarters using blocks
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

// Function to calculate distance travelled in feet between two points
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * 264;
}

// Function to calculate fare price based on distance travelled in feet
function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
    
    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

// Function saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function mondayWork
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Function wrapAdjective
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

// Function receivesAFunction
function receivesAFunction(callback) {
    callback();
}

// Function returnsANamedFunction
function returnsANamedFunction() {
    function namedFunction() {
        console.log('I am a named function!');
    }
    return namedFunction;
}

// Function returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    return function() {
        console.log('I am an anonymous function!');
    }
}

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

// Exporting functions if needed in a module environment
module.exports = {
    divide,
    square,
    add,
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
    saturdayFun,
    mondayWork,
    wrapAdjective,
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};
