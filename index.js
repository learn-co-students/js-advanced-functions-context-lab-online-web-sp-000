/* Your Code Here */
function createEmployeeRecord(empInfo) {
    const employee = {
        firstName: empInfo[0],
        familyName: empInfo[1],
        title: empInfo[2],
        payPerHour: empInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee;
}

function createEmployeeRecords(empInfoArr) {
    const employees = empInfoArr.map(createEmployeeRecord);
    return employees;
}

function createTimeInEvent(dateTime) {
    const workEvent = {
        type: "TimeIn",
        date: dateTime.split(' ')[0],
        hour: parseInt(dateTime.split(' ')[1])
    }
    this.timeInEvents.push(workEvent);
    return this;
}

function createTimeOutEvent(dateTime) {
    const workEvent = {
        type: "TimeOut",
        date: dateTime.split(' ')[0],
        hour: parseInt(dateTime.split(' ')[1])
    }
    this.timeOutEvents.push(workEvent);
    return this;
}

function hoursWorkedOnDate(date) {
    const hourIn = this.timeInEvents.find( e => e.date === date ).hour;
    const hourOut = this.timeOutEvents.find( e => e.date === date ).hour;
    return (hourOut - hourIn) / 100;
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date);
}

function calculatePayroll(employees) {
    const totalWages = employees.reduce( (total, e) => total + allWagesFor.call(e), 0);
    return totalWages;
}

function findEmployeeByFirstName(employees, firstName) {
    const employee = employees.find( (e) => e.firstName === firstName );
    return employee;
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