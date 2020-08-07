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

function createEmployeeRecord(record) {
  const employee = {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: []
  };
  return employee
}

function createEmployeeRecords(records) {
  return  records.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(dateTime) {
  const timeIn = {
    type: 'TimeIn',
    date: dateTime.split(' ')[0],
    hour: parseInt(dateTime.split(' ')[1])
  };
  this.timeInEvents.push(timeIn)
  return this
}

function createTimeOutEvent(dateTime) {
  const timeOut = {
    type: 'TimeOut',
    date: dateTime.split(' ')[0],
    hour: parseInt(dateTime.split(' ')[1])
  };
  this.timeOutEvents.push(timeOut)
  return this
}

function hoursWorkedOnDate(date) {
  let dateIn = this.timeInEvents.find(e => e.date == date)
  let dateOut = this.timeOutEvents.find(e => e.date == date)
  let totalHours = dateOut.hour - dateIn.hour
  return totalHours/100
}

// function wagesEarnedOnDate(date) {
//   let dateIn = this.timeInEvents.find(e => e.date == date)
//   let dateOut = this.timeOutEvents.find(e => e.date == date)
//   let totalHours = dateOut.hour - dateIn.hour
//   return totalHours/100 * this.payPerHour
// }

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function calculatePayroll(employees) {
  let wages = employees.map(function(employee) {
      let hours = []
      for (let i = 0; i < employee.timeOutEvents.length; i++) {
        let hour = employee.timeOutEvents[i].hour - employee.timeInEvents[i].hour
        hours.push(hour/100)
      }
      return hours.reduce((t, e) => t + e) * employee.payPerHour
  })
  return wages.reduce((t, e) => t + e)
  
}

function findEmployeeByFirstName(employees, name) {
  return employees.find(employee => employee.firstName == name)
}