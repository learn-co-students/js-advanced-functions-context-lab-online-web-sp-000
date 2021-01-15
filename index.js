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

function createEmployeeRecord(data) {
    return {
        firstName: data[0],
        familyName: data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(data) {
    return data.map(r => createEmployeeRecord(r))
}

function createTimeInEvent(date) {
    let [d,h] = date.split(" ");
    this.timeInEvents.push(
        {
            type: "TimeIn",
            hour: parseInt(h),
            date: d
        }
    )
    return this
}
function createTimeOutEvent(date) {
    let [d,h] = date.split(" ");
    this.timeOutEvents.push(
        {
            type: "TimeOut",
            hour: parseInt(h),
            date: d
        }
    )
    return this
}

function hoursWorkedOnDate(date) {
    let inTime = this.timeInEvents.find((e) => {return e.date === date}).hour;
    let out = this.timeOutEvents.find((e) => {return e.date === date}).hour;
    return ((out - inTime) / 100)
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(e => e.firstName === firstName)
}

function calculatePayroll(records) {
    let wages = records.map(record => allWagesFor.call(record));
    return wages.reduce((acc, w) => {return acc + w})
}