/* Your Code Here */

let createEmployeeRecord = (srcArray) => {
    const employee = {
        firstName: srcArray[0],
        familyName: srcArray[1],
        title: srcArray[2],
        payPerHour: srcArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

let createEmployeeRecords = (employees) => {
    return employees.map((employee) => {
        return createEmployeeRecord(employee);
    })
}

function createTimeInEvent(dateStamp){
    const date = dateStamp.split(' ').slice(0,1).join('');
    const time = parseInt(dateStamp.split(' ').slice(1).join(''), 10);
    const timeInObject = {
        type: 'TimeIn',
        hour: time,
        date: date
    }
    this.timeInEvents.push(timeInObject);
    return this;
}

function createTimeOutEvent(dateStamp){
    const date = dateStamp.split(' ').slice(0,1).join('');
    const time = parseInt(dateStamp.split(' ').slice(1).join(''), 10);
    const timeInObject = {
        type: 'TimeOut',
        hour: time,
        date: date
    }
    this.timeOutEvents.push(timeInObject);
    return this;
}

function hoursWorkedOnDate(specifiedDate) {
    const clockInEvent = this.timeInEvents.find((ele) => ele.date == specifiedDate)
    const clockOutEvent = this.timeOutEvents.find((ele) => ele.date == specifiedDate)
    return (clockOutEvent.hour - clockInEvent.hour) / 100;
}

function wagesEarnedOnDate(specifiedDate) {
    return hoursWorkedOnDate.call(this, specifiedDate) * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, fName) {
    return srcArray.find((e) => e.firstName === fName)
}

function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0)
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