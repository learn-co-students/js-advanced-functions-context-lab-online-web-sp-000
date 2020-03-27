function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeArrays){
  return employeeArrays.map(function(employee){
    return createEmployeeRecord(employee)
  })
}

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(hour, 10),
    date,
  })
  return this
}

function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(hour, 10),
    date,
  })
  return this
}

function hoursWorkedOnDate(dateStamp) {
  const eventOnDate = function(event) { return event.date === dateStamp }
  const timeIn = this.timeInEvents.find(eventOnDate).hour;
  const timeOut = this.timeOutEvents.find(eventOnDate).hour;
  return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(dateStamp) {
  let wages = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
  return wages
}


function findEmployeeByFirstName(employees, firstName){
    return employees.find(function(employee){
        return employee.firstName === firstName
    });
}

function calculatePayroll(employeeRecords){
    const reducer = (totalWages, employeeRecords) => {
        return totalWages + allWagesFor.call(employeeRecords)
    }
    return employeeRecords.reduce(reducer, 0)
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
