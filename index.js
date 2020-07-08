/* Your Code Here */

const createEmployeeRecord = arr => {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

const createEmployeeRecords = arr => {
  return arr.map(a => createEmployeeRecord(a))
}

function createTimeInEvent (dateTime) {
  this.timeInEvents.push({
    type: 'TimeIn',
    date: dateTime.split(' ')[0],
    hour: parseInt(dateTime.split(' ')[1])
  })
  return this
}

function createTimeOutEvent (dateTime) {
  this.timeOutEvents.push({
    type: 'TimeOut',
    date: dateTime.split(' ')[0],
    hour: parseInt(dateTime.split(' ')[1])
  })
  return this
}

function hoursWorkedOnDate (date) {
  const timeIn = this.timeInEvents.find(e => e.date === date).hour / 100
  const timeOut = this.timeOutEvents.find(e => e.date === date).hour / 100
  return timeOut - timeIn
}

function wagesEarnedOnDate (date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const calculatePayroll = employees => {
  return employees.reduce((m, e) => m + allWagesFor.call(e), 0)
}

const findEmployeeByFirstName = (employees, name) => {
  return employees.find(e => e.firstName === name)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date
  })

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this),
    0
  ) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}
