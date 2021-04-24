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
}

function createEmployeeRecords(employeeArray){
    return employeeArray.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp){
    let hourAndDate = dateStamp.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hourAndDate[1]),
        date: hourAndDate[0]
    })
    return this
}

function createTimeOutEvent(dateStamp){
    let hourAndDate = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hourAndDate[1]),
        date: hourAndDate[0]
    })
    return this
}

function hoursWorkedOnDate(date){
    let timeInHour = this.timeInEvents.find(e => e.date === date).hour;
    let timeOutHour = this.timeOutEvents.find(e => e.date === date).hour;
    return (timeOutHour - timeInHour)/100;
}

function wagesEarnedOnDate(date){
    let hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(e => e.firstName === firstName)
}

function calculatePayroll(employeeArray){
    return employeeArray.reduce(function(memo, employee){
        return memo + allWagesFor.call(employee)
    }, 0)
}