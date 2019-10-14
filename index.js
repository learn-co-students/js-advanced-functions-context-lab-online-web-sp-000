function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRecords) {
    return employeeRecords.map(eeRecord => createEmployeeRecord(eeRecord))
}

function createTimeInEvent(dateStamp) {
    const dateTimeArr = dateStamp.split(" ");
    const date = dateTimeArr[0];
    const hour = parseInt(dateTimeArr[1], 10);
    const timeInEvent = {
        type: "TimeIn",
        hour,
        date
    }
    this.timeInEvents.push(timeInEvent)
    return this
}

function createTimeOutEvent(dateStamp) {
    const dateTimeArr = dateStamp.split(" ");
    const date = dateTimeArr[0];
    const hour = parseInt(dateTimeArr[1], 10);
    const timeOutEvent = {
        type: "TimeOut",
        hour,
        date
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
}

function hoursWorkedOnDate(dateStamp) {
    const timeInHour = this.timeInEvents.find(e => e.date === dateStamp).hour
    const timeOutHour = this.timeOutEvents.find(e => e.date === dateStamp).hour
    return (timeOutHour - timeInHour) / 100
}


function wagesEarnedOnDate(dateStamp) {
    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
}

function findEmployeeByFirstName(eeRecordsArr, firstName) {
    return eeRecordsArr.find((ee) => ee.firstName === firstName)
}

function calculatePayroll(eeRecordsArr) {
    let eePayrollArr = eeRecordsArr.map(ee => allWagesFor.call(ee))
    return eePayrollArr.reduce((acc, curr) => acc + curr)
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

