/* Your Code Here */

let createEmployeeRecord = function(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }

}

let createEmployeeRecords = function(array) {
  return array.map(e => createEmployeeRecord(e))
}

let createTimeInEvent = function(date) {
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(date.split(' ')[1], 10),
    date: date.split(' ')[0]
  });

  return this
}

let createTimeOutEvent = function (date) {
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(date.split(' ')[1], 10),
    date: date.split(' ')[0]
  });

  return this
}

let hoursWorkedOnDate = function (date) {
  let clockIn = this.timeInEvents.find(e => e.date === date)
  let clockOut = this.timeOutEvents.find(e => e.date === date)
  let totalHours = (clockOut.hour - clockIn.hour ) / 100
  return totalHours
}

let wagesEarnedOnDate = function (date) {
  let check = hoursWorkedOnDate.call(this, date) * (this.payPerHour)
  return parseFloat(check.toString())
}

function findEmployeeByFirstName(infoArray, firstName) {
  return infoArray.find(record => record.firstName === firstName)
}

function calculatePayroll(records){
  return records.reduce(function (sum, employee){
    return sum + allWagesFor.call(employee)
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
