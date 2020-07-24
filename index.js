/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employeeArray) {
    let newEmployee = new Object();
    newEmployee.firstName = employeeArray[0];
    newEmployee.familyName = employeeArray[1];
    newEmployee.title = employeeArray[2];
    newEmployee.payPerHour = employeeArray[3];
    newEmployee.timeInEvents = [];
    newEmployee.timeOutEvents = []; 

    return newEmployee
}

function createEmployeeRecords(employeeArrays) {
    return employeeArrays.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp) {
    let dateAndTime = dateStamp.split(' ');
    let employeeIn = Object.create({
        type: "TimeIn",
        hour: parseInt(dateAndTime[1]),
        date: dateAndTime[0]
    })
    this.timeInEvents.push(employeeIn)
    return this
}

function createTimeOutEvent(dateStamp) {
    let dateAndTime = dateStamp.split(' ');
    let employeeOut = Object.create({
        type: "TimeOut",
        date: dateAndTime[0],
        hour: parseInt(dateAndTime[1])
    })
    this.timeOutEvents.push(employeeOut)
    return this
}

function hoursWorkedOnDate(dateWorked) {
    let inEvent = this.timeInEvents.find(event => event.date === dateWorked)
    let outEvent = this.timeOutEvents.find(event => event.date === dateWorked)
    return (outEvent.hour - inEvent.hour)/100
}

function wagesEarnedOnDate(dateWages) {
    let hoursWorked = hoursWorkedOnDate.bind(this)
    return hoursWorked(dateWages) * this.payPerHour
}

function calculatePayroll(arrayOfEmployeeRecords){

    let total = 0
    for (let i = 0; i < arrayOfEmployeeRecords.length; i++){
        total += allWagesFor.call(arrayOfEmployeeRecords[i])
    }
    return total
 
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(name => name.firstName.toLowerCase() === firstName.toLowerCase())
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