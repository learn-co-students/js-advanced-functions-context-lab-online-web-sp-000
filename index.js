/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 let createEmployeeRecord = (arr) => {
     return {
        firstName: arr[0],
        familyName:  arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
     }
 }

const createEmployeeRecords = (emplRec) => {
    return emplRec.map(function(row) {
        return createEmployeeRecord(row)
    })
}

function createTimeInEvent(dateSt){
    let [date, hour] = dateSt.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}
function createTimeOutEvent(dateSt) {
    let [date, hour] = dateSt.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10),
    })
    return this
}

function hoursWorkedOnDate(dateWorked) {
    let startTime = this.timeInEvents.find(function (e) {
        return e.date === dateWorked
    })

    let endTime = this.timeOutEvents.find(function (e) {
        return e.date === dateWorked
    })

    return (endTime.hour - startTime.hour) / 100;
}

function wagesEarnedOnDate(dateEarned) {
    let rawWage = hoursWorkedOnDate.call(this, dateEarned) * this.payPerHour
    return parseFloat(rawWage.toString())
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

let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(n => n.firstName === firstName)
}

let calculatePayroll = function(arr) {
    return arr.reduce(function(total, pay) {
        return total + allWagesFor.call(pay)
    }, 0)
}