/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(e => {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let createEmployeeRecord = function (data) {
    return {
        firstName: data[0],
        familyName: data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(records) {
    return records.map(data => createEmployeeRecord(data))
}

function createTimeEvent(time, type = "TimeIn") {
    const [date, hour] = time.split(" ")
    return { type: type, date: date, hour: parseInt(hour) }
}

let createTimeInEvent = function(time) {
    this.timeInEvents.push( createTimeEvent(time) )
    return this
}

let createTimeOutEvent = function (time) {
    this.timeOutEvents.push( createTimeEvent(time, "TimeOut") )
    return this
}

let hoursWorkedOnDate = function (date) {
    let hourIn = this.timeInEvents.find(e => { return e.date === date })
    let hourOut = this.timeOutEvents.find(e => { return e.date === date })

    return (hourOut.hour - hourIn.hour) / 100
}

let wagesEarnedOnDate = function (date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date)

    return this.payPerHour * hoursWorked

}

let findEmployeeByFirstName = function(col, str) {
    return col.find(e => { return e.firstName === str })
}

let calculatePayroll = function(records) {
    return records.map(e => allWagesFor.call(e)).reduce((t, n) => t + n)
}