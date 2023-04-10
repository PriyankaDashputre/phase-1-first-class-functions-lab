// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']


// 1

const returnFirstTwoDrivers = (driverFront) => {
    return driverFront.slice(0, 2)
}
returnFirstTwoDrivers(drivers);


// 2

const returnLastTwoDrivers = function (driversBack) {
    return driversBack.slice(2, 4)
}
returnLastTwoDrivers(drivers);


// 3

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// 4


function createFareMultiplier(num){
    return function(num2){
        return num * num2
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


// 5

function selectDifferentDrivers(test1, test2){
    return test2(test1);
};
selectDifferentDrivers(drivers, returnFirstTwoDrivers(test2));

