/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
let createEmployeeRecord = function(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employees) {
    return employees.map((emp) => {
        return createEmployeeRecord.call(this, emp)
    })
}

let createTimeInEvent = function(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    })
    return this
}

let createTimeOutEvent = function(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    })
    return this
}

let hoursWorkedOnDate = function(date) {
    let timeInHour = this.timeInEvents.find(event => event.date === date).hour
    let timeOutHour = this.timeOutEvents.find(event => event.date === date).hour
    let hoursWorked = (timeOutHour - timeInHour) / 100
    return hoursWorked
}

let wagesEarnedOnDate = function(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    let wagesEarned = this.payPerHour * hoursWorked
    return wagesEarned
}

let findEmployeeByFirstName = function(employees, firstName) {
    let matchedEmployee = employees.find((emp) => emp.firstName === firstName)
    return matchedEmployee
}

let calculatePayroll = function(employees) {
    let payOwed = employees.map(empRecord => allWagesFor.call(empRecord))
                           .reduce((acc, empPay) => acc + empPay)
    return payOwed
}

let allWagesFor = function() {
    let eligibleDates = this.timeInEvents.map(function(e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
