/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// function allWagesFor(record) {
//     const allWages = record.timeInEvents.map((day) => {return wagesEarnedOnDate(record, day.date)})
//     return allWages.reduce((total, current) => total + current)
// }

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(record) {
    let employeeRecord;
    return employeeRecord = {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord)
}


function createTimeInEvent(date) {
    let event = {
        type: "TimeIn",
        hour: parseInt(date.split(" ")[1], 10),
        date: date.split(" ")[0]
    }
    this.timeInEvents.push(event)
    return this;
}

// function createTimeOutEvent(record, dateStamp) {
//     record.timeOutEvents.push(createdObj("TimeOut", dateStamp))
//     return record;
// }
function createTimeOutEvent(date) {
    let event = {
        type: "TimeOut",
        hour: parseInt(date.split(" ")[1], 10),
        date: date.split(" ")[0]
    }
    this.timeOutEvents.push(event)
    return this
}

function hoursWorkedOnDate(dateStamp) {
    const timeIn = this.timeInEvents.find((e) => e.date === dateStamp).hour;
    const timeOut = this.timeOutEvents.find((e) => e.date === dateStamp).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(employees, firstName) {
    let found = employees.find((employee) => employee.firstName === firstName)
    return found;
}

function calculatePayroll(employeeRecords){
    return employeeRecords.reduce((total, current) => total + allWagesFor.call(current), 0)
}