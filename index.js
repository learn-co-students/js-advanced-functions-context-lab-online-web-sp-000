function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(function(array) {
        return createEmployeeRecord(array)
    })
}

function createTimeInEvent(dateTime) {
    const date = dateTime.split(' ')[0]
    const time = dateTime.split(' ')[1]
    this.timeInEvents.push({
        type: "TimeIn", 
        hour: parseInt(time, 10),
        date: date
    })
    return this
}

function createTimeOutEvent(dateTime) {
    const date = dateTime.split(' ')[0]
    const time = dateTime.split(' ')[1]
    this.timeOutEvents.push({
        type: "TimeOut", 
        hour: parseInt(time, 10),
        date: date
    })
    return this
}

function hoursWorkedOnDate(searchDate) {
    const timeInResult = this.timeInEvents.find( ({date}) => date === searchDate)
    const timeOutResult = this.timeOutEvents.find( ({date}) => date === searchDate)
    const hoursWorked = timeOutResult.hour - timeInResult.hour 
    return hoursWorked / 100
}

function wagesEarnedOnDate(searchDate) {
    return hoursWorkedOnDate.call(this, searchDate) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(item => 
        item.firstName === firstName
    )
}

function calculatePayroll(arrayOfRecords) {
    return arrayOfRecords.reduce(function(accumulator, currentValue) {
        return accumulator + allWagesFor.call(currentValue)
    }, 0)
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