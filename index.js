/* Your Code Here */

function createEmployeeRecord (array) {
    let record = {};
    record.firstName = array[0];
    record.familyName = array[1];
    record.title = array[2];
    record.payPerHour = array[3];
    record.timeInEvents = [];
    record.timeOutEvents = [];

    return record;
    
}

let  createEmployeeRecords = function (arrays) {

    return arrays.map(array => createEmployeeRecord(array));

}

let createTimeInEvent = function (time) {

    let splitTime = time.split(" ")
    this.timeInEvents.push({type: "TimeIn", date: splitTime[0], hour: parseInt(splitTime[1])});
    return this;
    
}

let createTimeOutEvent = function (time) {

    let splitTime = time.split(" ")
    this.timeOutEvents.push({type: "TimeOut", date: splitTime[0], hour: parseInt(splitTime[1])});
    return this;
    
}

let hoursWorkedOnDate = function (date) {

    // /console.log(this)
    let timeIn = this.timeInEvents.find(element => element.date === date).hour;
    let timeOut = this.timeOutEvents.find(element => element.date === date).hour;

    return (timeOut - timeIn)/100;
    
}
let wagesEarnedOnDate = function (date) {

    //console.log(this)
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour);
    
}

function findEmployeeByFirstName (employees, firstName) {
    return employees.find(employee => employee.firstname = firstName)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll (employees) {
    return employees.reduce(function (payRoll, employee) { 

        return (allWagesFor.call(employee) + payRoll);

    }, 0)
}