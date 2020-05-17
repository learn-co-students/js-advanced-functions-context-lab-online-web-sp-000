/* Your Code Here */

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

function createEmployeeRecord(array) {
    let employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

function createEmployeeRecords(arrayOfRecords) {
    return arrayOfRecords.map(createEmployeeRecord)
}

function createTimeInEvent(timeStamp) {
    let splitTime = timeStamp.split(' ')
    let newTimeStamp = {
        hour: parseInt(splitTime[1]),
        date: splitTime[0]
    }
    newTimeStamp.type = "TimeIn"
    this.timeInEvents.push(newTimeStamp)
    return this
}

function createTimeOutEvent(timeStamp) {
    let splitTime = timeStamp.split(' ')
    let newTimeStamp = {
        hour: parseInt(splitTime[1]),
        date: splitTime[0]
    }
    newTimeStamp.type = "TimeOut"
    this.timeOutEvents.push(newTimeStamp)
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(function(e) {
        return e.date === date
    })
    let timeOut = this.timeOutEvents.find(function(e) {
        return e.date === date
    })
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    return hoursWorked * this.payPerHour
}

function findEmployeeByFirstName(array, firstName) {
    return array.find(e => e.firstName === firstName)
}

function calculatePayroll(array) {
    return array.reduce(function(total, e){return total + allWagesFor.call(e)}, 0)
}