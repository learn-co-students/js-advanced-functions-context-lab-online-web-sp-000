/* Your Code Here */

function createEmployeeRecord (array) {
    //debugger
    
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function (records) {

    return records.map(function (record) {
        return createEmployeeRecord(record)
    })
    
}

function createTimeInEvent(timeIn) {
    //debugger
    let timeInEvent = {}
    timeInEvent.type = "TimeIn"
    timeInEvent.date = timeIn.split(' ')[0]
    timeInEvent.hour = parseInt(timeIn.split(' ')[1])
    this.timeInEvents.push(timeInEvent)

    return this
}

function createTimeOutEvent(timeOut) {
    //debugger
    let timeOutEvent = {}
    timeOutEvent.type = "TimeOut"
    timeOutEvent.date = timeOut.split(' ')[0]
    timeOutEvent.hour = parseInt(timeOut.split(' ')[1])
    this.timeOutEvents.push(timeOutEvent)

    return this
}

let hoursWorkedOnDate = function(soughtDate){

    let soughtOutDate = this.timeOutEvents.find(function (timeOutEvent) {
        return timeOutEvent.date === soughtDate
    })

    let soughtInDate = this.timeInEvents.find(function (timeInEvent) {
        return timeInEvent.date === soughtDate
    })

    return (soughtOutDate.hour - soughtInDate.hour) / 100

}

let wagesEarnedOnDate = function(date) {
    
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

let calculatePayroll = function (employees) {
    return employees.reduce( function(totalWages, employee) {
        return totalWages + allWagesFor.call(employee)
    }, 0)
}

let findEmployeeByFirstName = function (employees, firstname) {
    return employees.find( employee => employee.firstName === firstname)
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