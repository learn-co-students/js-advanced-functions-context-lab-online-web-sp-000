/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
let createEmployeeRecord = function(e) {
    return {firstName: e[0],
            familyName: e[1],
            title: e[2],
            payPerHour: e[3],
            timeInEvents: [],
            timeOutEvents: []}
}

let createEmployeeRecords = function(employees) {
    return employees.map(e => createEmployeeRecord(e))
}

let createTimeInEvent = function(dateStamp) {
    let [date, time] = dateStamp.split(' ')
    this.timeInEvents.push({date: date, hour: parseInt(time, 10), type: "TimeIn"})
    return this
}

let createTimeOutEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({date: date, hour: parseInt(hour, 10), type: "TimeOut"});
    return this
}

let hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date);
    let timeOut = this.timeOutEvents.find(event => event.date === date);
    if (!!timeIn && !!timeOut) {
        let hours = (timeOut.hour - timeIn.hour)/100
        return hours
    }
}

let wagesEarnedOnDate = function(date) {
    let hours = hoursWorkedOnDate.call(this, date);
    if (!!hours) {
        return hours * this.payPerHour
    }
}

let calculatePayroll = function(records) {
    let wages = records.map(el => allWagesFor.call(el))
    return wages.reduce((total, current) => current + total)
}

let findEmployeeByFirstName = function(collection, name) {
    return collection.find(emp => emp.firstName === name)
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