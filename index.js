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
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []        
    }
};

let createEmployeeRecords = function(array) {
    return array.map(arr => createEmployeeRecord(arr))
}

function createTimeInEvent(date) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    })
    return this;
}

function createTimeOutEvent(date) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    })
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(el => el.date === date)
    let timeOut = this.timeOutEvents.find(el => el.date === date)

    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * parseInt(this.payPerHour)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(array) {
    return array.reduce( (total, date) => total + allWagesFor.call(date), 0)
}