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
        timeOutEvents: [],
    }
}

function createEmployeeRecords(array) {
    return array.map( element => createEmployeeRecord(element) );
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    let inEvent = {
        type: "TimeIn",
        hour: parseInt(hour),
        date,
    }
    this.timeInEvents.push(inEvent);
    return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    let inEvent = {
        type: "TimeOut",
        hour: parseInt(hour),
        date,
    }
    this.timeOutEvents.push(inEvent);
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find( event => event.date === date ).hour;
    let timeOut = this.timeOutEvents.find( event => event.date === date ).hour;
    return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find( element => element.firstName === firstName );
}

function calculatePayroll(array) {
    let wages = array.map( element => allWagesFor.call(element));
    return wages.reduce( function(accumulator, current) {
        return accumulator + current;
    }, 0);
}