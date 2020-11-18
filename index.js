function createEmployeeRecord(array) {
    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(array) {
    return array.map(employeeData => createEmployeeRecord(employeeData))
}

function createTimeInEvent(date) {
    let day = date.split(" ")[0]
    let time = parseInt(date.split(" ")[1])
    let inEvent = {type: "TimeIn", date: day, hour: time}
    this.timeInEvents.push(inEvent)
    return this
}

function createTimeOutEvent(date) {
    let day = date.split(" ")[0]
    let time = parseInt(date.split(" ")[1])
    let outEvent = {type: "TimeOut", date: day, hour: time}
    this.timeOutEvents.push(outEvent)
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date)
    let timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours;    
}

function findEmployeeByFirstName(employeesArray, name) {
    return employeesArray.find(employee => employee.firstName === name)
}

function calculatePayroll(employeesArray) {
    let wagesArray = employeesArray.map(employee => allWagesFor.call(employee))
    return wagesArray.reduce((total, wage) => total + wage, 0)
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