/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(array) { 
    let record = {};
    [record.firstName, record.familyName, record.title, record.payPerHour] = array
    record.timeInEvents = [];
    record.timeOutEvents = [];
    return record;
}

function createEmployeeRecords(array) {
    return array.map(record => {
        return createEmployeeRecord(record)
    })
}

function createTimeInEvent(timeIn) {
    let obj = {};
    let [date, hour] = timeIn.split(' ');
    obj.date = date;
    obj.hour = parseInt(hour, [10]);
    obj.type = 'TimeIn';
    this.timeInEvents.push(obj);
    return this;
}

function createTimeOutEvent(timeOut) {
    let obj = {};
    let [date, hour] = timeOut.split(' ');
    obj.date = date;
    obj.hour = parseInt(hour, 10);
    obj.type = 'TimeOut';
    this.timeOutEvents.push(obj);
    return this;
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(e => e.date === date);
    let timeOut = this.timeOutEvents.find(e => e.date === date);
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

// let payrollExpense = function() {
//         console.log(this * 1000)
// //     dates = this.timeInEvents.map(e => e.date);
// //     return dates
// }

function calculatePayroll(records) {
   return records.reduce((total, val) => total + allWagesFor.call(val), 0)
}

function findEmployeeByFirstName(records, name) {
    return records.find( ({firstName}) => firstName === name);
}