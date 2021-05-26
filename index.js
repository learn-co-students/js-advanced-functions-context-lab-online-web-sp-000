/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(person) {
    return {
        firstName: person[0],
        familyName: person[1],
        title: person[2],
        payPerHour: person[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array) {
    return array.map(record => createEmployeeRecord(record));
}

function createTimeInEvent(dateStamp) {
    let [date, time] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time, 10),
        date: date
    });
    return this;
}

function createTimeOutEvent(dateStamp) {
    let [date, time] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time, 10),
        date: date
    });
    return this;
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(day => day.date === date);
    let timeOut = this.timeOutEvents.find(day => day.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
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

function findEmployeeByFirstName(records, name) {
    return records.find(record => record.firstName === name);
}

function calculatePayroll(records) {
    let wages = records.map(record => allWagesFor.call(record));
    return wages.reduce((memo, wage) => memo += wage);
}