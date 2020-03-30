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
    let employee = {};
    [employee.firstName, employee.familyName, employee.title, employee.payPerHour] = arr;
    employee.timeInEvents = [];
    employee.timeOutEvents = [];
    return employee
}

function createEmployeeRecords(arr) {
    return arr.map(el => createEmployeeRecord(el))
}

function createTimeInEvent(timePunch) {
    let obj = {};
    obj.type = "TimeIn"
    obj.date = timePunch.split(' ')[0]
    obj.hour = parseInt(timePunch.split(' ')[1], 10)
    this.timeInEvents.push(obj)
    return this
}

function createTimeOutEvent(timePunch) {
    let obj = {};
    obj.type = "TimeOut"
    obj.date = timePunch.split(' ')[0]
    obj.hour = parseInt(timePunch.split(' ')[1], 10)
    this.timeOutEvents.push(obj)
    return this
}

function hoursWorkedOnDate(date) {
   let num = (this.timeOutEvents.find(x => x.date === date).hour -
          this.timeInEvents.find(x => x.date === date).hour)

    return num /100
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)

    return hours *  this.payPerHour
}


function calculatePayroll(employees) {
    return employees.reduce(function(acc, employee) {
        return acc + allWagesFor.call(employee)
    }, 0) 
}

function findEmployeeByFirstName(arr, name) {
    return arr.filter(x => x.firstName === name)[0]
}