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
    let person = {firstName: array[0], familyName: array[1], title: array[2], payPerHour: array[3], timeInEvents: [], timeOutEvents: []}
    return person
}

let createEmployeeRecords = function (array) {
    let employees = []
     array.forEach(person => employees.push(createEmployeeRecord(person)))
     return employees 
}

function createTimeInEvent(time) {
    
    let event = {type: "TimeIn", date: time.split(" ")[0], hour: parseInt(time.split(" ")[1])}
    this.timeInEvents.push(event)
    
    return this
}

function createTimeOutEvent(time) {
    let event = {type: "TimeOut", date: time.split(" ")[0], hour: parseInt(time.split(" ")[1])}
    this.timeOutEvents.push(event)
    return this
}

function hoursWorkedOnDate(record) {
    let timeIn = this.timeInEvents.find(e => e.date === record)
    
    
    let timeOut = this.timeOutEvents.find(e => e.date === record)
    
    let hours = (timeOut.hour - timeIn.hour) / 100
    return hours
}

function wagesEarnedOnDate(date) { 
    let wage = this.payPerHour
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    return wage * hoursWorked  
}

function calculatePayroll(employees) {
    let total = 0
    employees.forEach(employee => {
         total += allWagesFor.call(employee)
    })
    return total
}

function findEmployeeByFirstName(employees, name) {
    let employee = employees.find(emp => emp.firstName == name)
     return employee
 }