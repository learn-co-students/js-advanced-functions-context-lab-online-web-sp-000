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

let createEmployeeRecord = function(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

let createEmployeeRecords = function(arr) {
    return arr.map(record => {
        return createEmployeeRecord(record);
    })
}

let createTimeInEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour, 10)
    })
return this
}

let createTimeOutEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(hour, 10)
    })
return this
}

let hoursWorkedOnDate = function(date) {
    let inTime = this.timeInEvents.find(e => {return e.date == date}).hour
    let outTime = this.timeOutEvents.find(e => {return e.date == date}).hour

    return (outTime - inTime) / 100
}

let wagesEarnedOnDate = function(date) {
return (hoursWorkedOnDate.call(this, date) * this.payPerHour)
}

let findEmployeeByFirstName = function(recordsArray, firstName) {
    return recordsArray.find(record => {return record.firstName == firstName});
}

let calculatePayroll = function(recordsArray) {
    return recordsArray.reduce((total, record) => {return total + allWagesFor.call(record)}, 0)
}