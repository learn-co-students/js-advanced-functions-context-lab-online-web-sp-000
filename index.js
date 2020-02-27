/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(empArray){
    let employee = {};
    employee.firstName = empArray[0];
    employee.familyName = empArray[1];
    employee.title = empArray[2];
    employee.payPerHour = empArray[3];
    employee.timeInEvents = [];
    employee.timeOutEvents = [];
    return employee
}

function createEmployeeRecords(empArrays){
    return empArrays.map(function(empArray){
        return createEmployeeRecord(empArray)
    })
}

function createTimeInEvent(dateStamp){
    let [day, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: day 
    })
    return this
}

function createTimeOutEvent(dateStamp){
    let [day, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: day 
    })
    return this
}

function hoursWorkedOnDate(date){
    let inshift = this.timeInEvents.find(shift => shift.date === date)
    let outshift = this.timeOutEvents.find(shift => shift.date === date)
    if (!!inshift && !!outshift) {
        let hoursWorked = (outshift.hour - inshift.hour) / 100
        return hoursWorked
    }
    return `No shift data available for ${date}.`
}

function wagesEarnedOnDate(date){
    let rate = this.payPerHour
    let hours = hoursWorkedOnDate.call(this, date)
    return rate * hours
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

function calculatePayroll(employees){
    let totalPayroll = employees.reduce(
        (total, employee) => total + allWagesFor.call(employee), 0);
    return totalPayroll
}

function findEmployeeByFirstName(employees, firstName){
    let result = employees.filter(employee => employee.firstName === firstName)
    return result[0]
}