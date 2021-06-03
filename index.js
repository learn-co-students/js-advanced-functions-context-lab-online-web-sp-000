/* Your Code Here */
function createEmployeeRecord(info) {
    const employee = {
        firstName: info[0],
        familyName: info[1],
        title: info[2],
        payPerHour: info[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(info) {
    return info.map(e => createEmployeeRecord(e))
}

function createTimeInEvent(dateTime) {
    const splitDate = dateTime.split(" ")
    const date = splitDate[0]
    const hour = parseInt(splitDate[1])

    this.timeInEvents.push({ type: "TimeIn", date: date, hour: hour })
    return this
}

function createTimeOutEvent(dateTime) {
    const splitDate = dateTime.split(" ")
    const date = splitDate[0]
    const hour = parseInt(splitDate[1])

    this.timeOutEvents.push({ type: "TimeOut", date: date, hour: hour })
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(day => day.date === date).hour
    const timeOut = this.timeOutEvents.find(day => day.date === date).hour

    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
}

function calculatePayroll(employees) {
    const wages = employees.map(e => {
        const eWages = e.timeInEvents.map(day => wagesEarnedOnDate.call(e, day.date))
        return eWages.reduce((total, pay) => { return total + pay })
    })
    return wages.reduce((total, pay) => { return total + pay })
}

function findEmployeeByFirstName(employees, name) {
    return employees.find(e => e.firstName === name)
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