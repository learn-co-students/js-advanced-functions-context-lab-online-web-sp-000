/* Your Code Here */

function createEmployeeRecord(employeeArray){
    const employeeRecord = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };    

    return employeeRecord
}

function createEmployeeRecords(employees){
    const srcArray = employees.map(x => createEmployeeRecord(x))

    return srcArray
}

function createTimeInEvent(dateStamp){
    
    const dateTime = dateStamp.split('-');
    const timeInHour = dateTime[2]
    const hourNow = timeInHour.slice(3)
    const dayNow = timeInHour.substr(0,2)

    
    const timeInEvents = {
        type: "TimeIn",
        hour: parseInt(hourNow, 10),
        date: `${dateTime[0]}-${dateTime[1]}-${dayNow}`
    }

    this.timeInEvents.push(timeInEvents) // First instance of using 'this' in place of 'employeeRecord'

    return this // Don't forget to return 'this' as well!
}

function createTimeOutEvent(dateStamp){
    
    const dateTime = dateStamp.split('-');
    const timeInHour = dateTime[2]
    const hourNow = timeInHour.slice(3)
    const dayNow = timeInHour.substr(0,2)

    
    const timeOutEvents = {
        type: "TimeOut",
        hour: parseInt(hourNow, 10),
        date: `${dateTime[0]}-${dateTime[1]}-${dayNow}`
    }

    this.timeOutEvents.push(timeOutEvents) // Another instance

    return this
}

function hoursWorkedOnDate(dateStamp){
    const timeInResult = this.timeInEvents.find( ({date}) => date === dateStamp) // Using 'find' in this context helps refactor the code signficantly
    const timeOutResult = this.timeOutEvents.find( ({date}) => date === dateStamp)
    const hoursWorked = timeOutResult.hour - timeInResult.hour 
    return hoursWorked / 100
}

function wagesEarnedOnDate(dateStamp){
    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour // First instance of using call, where the 'this' refers to our employee array followed by the argument.
}

function findEmployeeByFirstName(srcArray, firstName){
    const search = srcArray.filter(function(employee){
        return employee.firstName === firstName;
    })

    const record = search[0]
    return record
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(function(total, element) {
        return total + allWagesFor.call(element)
    }, 0)
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