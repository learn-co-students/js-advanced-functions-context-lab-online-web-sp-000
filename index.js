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
    let employeeRecord = {
        firstName : arr[0],
        familyName : arr[1],
        title : arr[2],
        payPerHour : arr[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employeeRecord
}

function createEmployeeRecords(arr) {
    let employeeRecord = arr.map(x => createEmployeeRecord(x))
    return employeeRecord
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    this.timeInEvents.push({type : "TimeIn",
                            date : date,
                            hour : parseInt(hour)})
    return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({   type : "TimeOut",
                                date : date,
                                hour : parseInt(hour)})
    return this
}

function hoursWorkedOnDate(dateStamp) {
    const timeIn = this.timeInEvents.find(e => e.date === dateStamp).hour
    const timeOut = this.timeOutEvents.find(e => e.date === dateStamp).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(dateStamp) {
    const wage = this.payPerHour
    const hoursWorked = hoursWorkedOnDate.call(this, dateStamp)
    return wage * hoursWorked
}

function allWagesFor() {
    const allWages = this.timeInEvents.map(day => {return wagesEarnedOnDate.call(this, day.date)})
    return allWages.reduce((acc, val) => acc + val)
}

function findEmployeeByFirstName(srcArray, name) {
    return srcArray.find(name => name.firstName)
}

function calculatePayroll(srcArray) {
    return srcArray.reduce((payrollTally, employee) => payrollTally + allWagesFor.call(employee), 0)
}