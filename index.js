/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord(array)
{
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []

  }
}
function createEmployeeRecords(array)
{
  return array.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(date)
{
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(date.substring(date.length - 5,date.length)),
    date: date.substring(0, date.length - 5)
  })
  return this
}
function createTimeOutEvent(date)
{
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(date.substring(date.length - 5,date.length)),
      date: date.substring(0, date.length - 5)
    })

  return this
}

function hoursWorkedOnDate(date)
{
    let timeIn = this.timeInEvents.find(x => x.date === date).hour
    let timeOut = this.timeOutEvents.find(x => x.date === date).hour
    return (timeOut - timeIn)/100
}
function wagesEarnedOnDate(date)
{
  return hoursWorkedOnDate.call(this, date)*this.payPerHour
}
function calculatePayroll(employeeRecords)
{
  let payable = employeeRecords.reduce(function (memo, d) {
      return memo + allWagesFor.call(d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
  return payable
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

function findEmployeeByFirstName(employeeRecords, firstName)
{
  return employeeRecords.find(employee => employee.firstName === firstName)
}
