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

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(arr) {
    return arr.map(employee => createEmployeeRecord(employee));
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
    return this;
}

function hoursWorkedOnDate(date) {
    let inEvent = this.timeInEvents.find(element => element.date === date);
    let outEvent = this.timeOutEvents.find(element => element.date === date);

    return (outEvent.hour - inEvent.hour) / 100;
}


function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * parseInt(this.payPerHour);
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(array) {
    return array.reduce(function(accumulator, employee) {
        return accumulator + allWagesFor.call(employee);
    }, 0);
}