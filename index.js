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

function createEmployeeRecord(dataArray){
    const employee = {
        firstName: dataArray[0],
        familyName: dataArray[1],
        title: dataArray[2],
        payPerHour: dataArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employee
}

function createEmployeeRecords(employeeArray){
    return employeeArray.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp){
    const newTimeInEvent = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1], 0),
        date: dateStamp.split(" ")[0]
    }

    this.timeInEvents.push(newTimeInEvent)
    return this
}

function createTimeOutEvent(dateStamp){
    const newTimeOutEvent = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1], 0),
        date: dateStamp.split(" ")[0]
    }

    this.timeOutEvents.push(newTimeOutEvent)
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date).hour
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour

    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

// function allWagesFor(){
//     this.timeInEvents.map(event => )
// }

function findEmployeeByFirstName(employeeArray, firstName){
    return employeeArray.find(emp => emp.firstName === firstName)
}

function calculatePayroll(employeeArray){
    return employeeArray.reduce(function(total, e){
        return total + allWagesFor.call(e)
    }, 0)
}