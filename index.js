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
    const employeeInfo = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeInfo
}

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord)
}

function createTimeInEvent(times) {
     let [date, hour] = times.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date, 
    })
    return this
}

function createTimeOutEvent(array) {
    let [date, hour] = array.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function hoursWorkedOnDate(dates) {
    let clockedIn = this.timeInEvents.find(function(x) {
        return x.date === dates
    })
    let clockedOut = this.timeOutEvents.find(function(x) {
        return x.date === dates
    })
    let workHours = clockedOut.hour - clockedIn.hour
    return workHours / 100
}

function wagesEarnedOnDate(wages) {
    let pay = hoursWorkedOnDate.call(this, wages) * this.payPerHour
    return parseFloat(pay.toString())
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function(x) {
        return x.firstName === firstName
    })
}

function calculatePayroll(array) {
    return array.reduce(function(e, i){
        return e + allWagesFor.call(i)}, 0)
}