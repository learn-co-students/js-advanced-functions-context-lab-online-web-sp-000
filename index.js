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

function createEmployeeRecord(employeeArray) {
  let employee = {}

  employee.firstName = employeeArray[0];
  employee.familyName = employeeArray[1];
  employee.title = employeeArray[2];
  employee.payPerHour = employeeArray[3];
  employee.timeInEvents = [];
  employee.timeOutEvents = [];

  return employee;
}

function createEmployeeRecords(arrOfArrays){
  return arrOfArrays.map(person => {
    return createEmployeeRecord(person);
  })
}

function createTimeInEvent(date) {
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(date.split(' ')[1]),
    date: date.split(' ')[0]
  })
  return this;
}

function createTimeOutEvent(date) {
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(date.split(' ')[1]),
    date: date.split(' ')[0]
  })
  return this;
}

// Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
function hoursWorkedOnDate(date) {

  let inWork = this.timeInEvents.find(e => e.date === date);
  let outWork = this.timeOutEvents.find(e => e.date === date);
  let hoursWorked = (outWork.hour - inWork.hour) / 100;

  return hoursWorked;
}

// Given an employee record with a date-matched timeInEvent and timeOutEvent
function wagesEarnedOnDate(date) {

  let hours = hoursWorkedOnDate.call(this, date);
  return hours * parseInt(this.payPerHour);
}

function calculatePayroll(array) {
  let zero = 0;
  return array.reduce(function(zero, el) {
    return allWagesFor.call(el) + zero;
  }, zero);
}

function findEmployeeByFirstName(array, empName) {
 return array.find(e => e.firstName === empName);
}
