/* Your Code Here */
// Your code here
function createEmployeeRecord(employeeInfoArray){
    return Object.assign({}, {
        "firstName": employeeInfoArray[0],
        "familyName": employeeInfoArray[1],
        "title": employeeInfoArray[2],
        "payPerHour": employeeInfoArray[3],
        "timeInEvents": [],
        "timeOutEvents": []
        })
}

function createEmployeeRecords(arrayOfInfoArrays){
    return arrayOfInfoArrays.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    this.timeInEvents.push(
        {
            "type": "TimeIn",
            "hour": Number(dateStamp.slice(11, 15)),
            "date": dateStamp.slice(0, 10)
        }
    )
    return this
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push(
        {
            "type": "TimeOut",
            "hour": Number(dateStamp.slice(11, 15)),
            "date": dateStamp.slice(0, 10)
        }
    )
    return this
}

function hoursWorkedOnDate(dateStamp){
    const timeIn = this.timeInEvents.find(e => e.date === dateStamp).hour
    const timeOut = this.timeOutEvents.find(e => e.date === dateStamp).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(dateStamp){
    return hoursWorkedOnDate.call(this, dateStamp)*this.payPerHour
}

function findEmployeeByFirstName(arrayOfEmployeeRecords, firstName){
    return arrayOfEmployeeRecords.find(record => record.firstName === firstName)
}

function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(
        (payroll, employeeRecord) => 
            payroll + allWagesFor.call(employeeRecord), 0
    )
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