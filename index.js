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
function createEmployeeRecord (array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(array){
  return array.map(record => createEmployeeRecord(record))
}

function createTimeInEvent (stamp){
  let timeInEvent = {
  date: stamp.split(" ")[0],
  hour: parseInt(stamp.split(" ")[1], 10),
  type: "TimeIn"
  }
  this.timeInEvents.push(timeInEvent)
  return this
}

function createTimeOutEvent (stamp){
  let timeOutEvent = {
  date: stamp.split(" ")[0],
  hour: parseInt(stamp.split(" ")[1], 10),
  type: "TimeOut"
  }
  this.timeOutEvents.push(timeOutEvent)
  return this
}
function hoursWorkedOnDate(date){
  //find timeInEvent that matches date
  let clockIn = this.timeInEvents.find(e => e.date === date)
  //find timeOutEvent that matches date
  let clockOut = this.timeOutEvents.find(e => e.date === date)

  return (clockOut.hour - clockIn.hour)/100
}
function wagesEarnedOnDate(date){
  return this.payPerHour * hoursWorkedOnDate.call(this, date)
}
function calculatePayroll(array){
  return array.reduce((m, e) => m + allWagesFor.call(e), 0)
}
function findEmployeeByFirstName(employees, firstName){
  return employees.find(e => e.firstName === firstName)
}
