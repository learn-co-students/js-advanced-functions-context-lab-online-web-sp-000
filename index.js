let createEmployeeRecord = function (employee) {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

let createEmployeeRecords = function (employees) {
  return employees.map(e => createEmployeeRecord(e))
}

let createTimeInEvent = function (dateTime) {
  let [date, time] = dateTime.split(' ')

  this.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(time, 10),
    date: date
  })

  return this
}

function createTimeOutEvent(dateTime) {
  let [date, time] = dateTime.split(' ')

  this.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(time, 10),
    date: date
  })

  return this
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(e => e.date === date).hour
  let timeOut = this.timeOutEvents.find(e => e.date === date).hour
  return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date){
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function calculatePayroll(employees){
  return employees.reduce((total, e) => {return total + allWagesFor.call(e)}, 0)
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

function findEmployeeByFirstName(employees, name){
    return employees.find(e => e.firstName === name)
}
