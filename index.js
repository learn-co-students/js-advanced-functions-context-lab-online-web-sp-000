/* Your Code Here */

function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeesData) {
    return employeesData.map(employeeData => createEmployeeRecord(employeeData));
}

function createTimeInEvent(date) {
    const event = getEventFromDate('TimeIn', date);
    this.timeInEvents.push(event);
    return this;
}

function createTimeOutEvent(date) {
    const event = getEventFromDate('TimeOut', date);
    this.timeOutEvents.push(event);
    return this;
}

function getEventFromDate(type, date) {
    return {
        type: type,
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0]
    }
}

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(timeInEvent => timeInEvent.date === date);
    const timeOutEvent = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date);
    return (timeOutEvent.hour - timeInEvent.hour)/100;
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
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

function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName = firstName);
}

function calculatePayroll(employees) {
    return employees.reduce((payrollTotal, employee) => payrollTotal + allWagesFor.call(employee), 0);
}