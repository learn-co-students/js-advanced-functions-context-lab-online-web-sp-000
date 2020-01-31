/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
 function createEmployeeRecord(employee) {
    return Object.assign({
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    })
}

function createEmployeeRecords(employees) {
    return employees.map(createEmployeeRecord)
}

function createTimeInEvent(timeString) {
    let indate = timeString.split(" ")[0]
    let intime = timeString.split(" ")[1]
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(intime),
        date: indate
    })
    return this
}

function createTimeOutEvent(timeString) {
    let outdate = timeString.split(" ")[0]
    let outtime = timeString.split(" ")[1]
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(outtime),
        date: outdate
    })
    return this
}

function hoursWorkedOnDate(date) {
    let hourIn = this.timeInEvents.find( e => e.date === date ).hour / 100
    let hourOut = this.timeOutEvents.find( e => e.date === date).hour / 100
    return hourOut - hourIn
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(records) {
    let employeeWages = records.map(rec => allWagesFor.call(rec))
    return employeeWages.reduce((total, wage) => total + wage, 0)
}

function findEmployeeByFirstName(employees, name) {
    return employees.find(emp => emp.firstName === name)
}