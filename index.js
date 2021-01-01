/* Your Code Here */

function createEmployeeRecord(array) {
    let employee = {
        firstName: array[0], 
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return Object.create(employee)
}

function createEmployeeRecords(employeesArray) {
    return employeesArray.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateString) {
    let eventArgs = {
        type: 'TimeIn',
        hour: parseInt(dateString.split(' ')[1]),
        date: dateString.split(' ')[0]
    }

    this.timeInEvents.push(Object.create(eventArgs))
    return this
}

function createTimeOutEvent(dateString) {
    let eventArgs = {
        type: 'TimeOut',
        hour: parseInt(dateString.split(' ')[1]),
        date: dateString.split(' ')[0]
    }

    this.timeOutEvents.push(Object.create(eventArgs))
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(timeInEvent => timeInEvent.date === date).hour
    let timeOut = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date).hour

    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function calculatePayroll(array) {
    return array.reduce( (total, emp) => total + allWagesFor.call(emp), 0 )
}

function findEmployeeByFirstName(employees, name) {
    return employees.find(employee => employee.firstName === name)
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