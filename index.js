/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord (array) {
    let obj = {
        firstName: array[0],
        familyName: array[1], 
        title: array[2], 
        payPerHour: array[3], 
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
}

function createEmployeeRecords(employeeArray) {
    let obj = employeeArray.map(employee => createEmployeeRecord(employee))
    return obj
}

function createTimeInEvent(timeStamp) {
    const time = timeStamp.split(" ")
    const hour = parseInt(time[1])
    const date = time[0]

    let obj = {
        type: "TimeIn",
        hour: hour,
        date: date
    }
    
    this.timeInEvents.push(obj)
    return this
}

function createTimeOutEvent(timeStamp) {
    const time = timeStamp.split(" ")
    const hour = parseInt(time[1])
    const date = time[0]

    let obj = {
        type: "TimeOut",
        hour: hour,
        date: date
    }
    
    this.timeOutEvents.push(obj)
    return this
}

function hoursWorkedOnDate(dateWorked) {
    let timeIn = this.timeInEvents.find(date => date.date === dateWorked)
    let timeOut = this.timeOutEvents.find(date => date.date === dateWorked)
    let hoursWorked = ((timeOut.hour - timeIn.hour)/100)
    return hoursWorked 
}

function wagesEarnedOnDate(date) {
    return ((hoursWorkedOnDate.call(this, date)) * this.payPerHour)
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

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(name => name.firstName === firstName)
}

function calculatePayroll(arrayOfEmpRecords) {
    let arrayOfEmployeeHours = arrayOfEmpRecords.map(employee => allWagesFor.call(employee))
    let total = arrayOfEmployeeHours.reduce(function(a,b) {return a+b}, 0)
    return total
}
