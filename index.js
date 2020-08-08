/* Your Code Here */
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    } 
}

function createEmployeeRecords(arr) {
    return arr.map(r => createEmployeeRecord(r));
}

function createTimeInEvent(ds) {
    let obj = {
        type: "TimeIn",
        hour: parseInt(ds.split(" ")[1], 10),
        date: ds.split(" ")[0]
    }
    this.timeInEvents.push(obj);
    return this
}

function hoursWorkedOnDate(d) {
    let timeIn = this.timeInEvents.filter(e => e.date === d)[0].hour;
    let timeOut = this.timeOutEvents.filter(e => e.date === d)[0].hour;
    return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(d) {
    return hoursWorkedOnDate.call(this, d) * this.payPerHour
}

function createTimeOutEvent(ds) {
    let obj = {
        type: "TimeOut",
        hour: parseInt(ds.split(" ")[1], 10),
        date: ds.split(" ")[0]
    }
    this.timeOutEvents.push(obj);
    return this
}

function calculatePayroll(arr) {
    return arr.reduce((total, e) => allWagesFor.call(e) + total, 0)
}

function findEmployeeByFirstName(arr, fname) {
    return arr.find(e => e.firstName === fname)
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







