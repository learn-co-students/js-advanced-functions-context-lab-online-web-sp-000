let createEmployeeRecord = function(input){
    return {
        firstName: input[0],
        familyName: input[1],
        title: input[2],
        payPerHour: input[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

function createTimeInEvent(timeStamp) {
    let [date, hour] = timeStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function createTimeOutEvent(timeStamp) {
    let [date, hour] = timeStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function hoursWorkedOnDate(searchDate) {
    let inEvent = this.timeInEvents.find(function(e) {
        return e.date === searchDate
    })

    let outEvent = this.timeOutEvents.find(function(e) {
        return e.date === searchDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(searchDate) {
    let wage = hoursWorkedOnDate.call(this, searchDate) * this.payPerHour
    return parseFloat(wage.toString())
}

function findEmployeeByFirstName(array, firstName) {
    return array.find(function(rec) {
        return rec.firstName === firstName
    })
}


function calculatePayroll(recordArray) {
    return recordArray.reduce(function(memo, rec) {
        return memo + allWagesFor.call(rec)
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