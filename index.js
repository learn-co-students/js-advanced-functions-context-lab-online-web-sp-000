/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(dateStamp.split(' ')[1]),
    date: dateStamp.split(' ')[0],
  });
  return this;
}

function createTimeOutEvent(dateStamp) {
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(dateStamp.split(' ')[1]),
    date: dateStamp.split(' ')[0],
  });
  return this;
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(timeIn => timeIn.date === date);
  let timeOut = this.timeOutEvents.find(timeOut => timeOut.date === date);
  return (parseInt(timeOut.hour - timeIn.hour)) / 100;
}

function wagesEarnedOnDate(date) {
  return this.payPerHour * hoursWorkedOnDate.call(this, date);
}

let allWagesFor = function() {
  let eligibleDates = this.timeInEvents.map(function(e) {
    return e.date
  })

  let payable = eligibleDates.reduce(function(memo, d) {
    return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employees) {
  return employees.reduce(function(total, employee) {
    return total + allWagesFor.call(employee);
  }, 0);
}