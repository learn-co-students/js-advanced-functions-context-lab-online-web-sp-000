/* Your Code Here */
function createEmployeeRecord(array) {
  let record = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return record;
}

function createEmployeeRecords(employees) {
  let records = [];
  for (let i = 0; i < employees.length; i++) {
    records = [...records, createEmployeeRecord(employees[i])];
  }
  return records;
}

function createTimeInEvent(dateTime) {
  let event = {
    type: "TimeIn",
    hour: parseInt(dateTime.split(' ')[1], 10),
    date: dateTime.split(' ')[0]
  };
  this.timeInEvents = [...this.timeInEvents, event];
  return this;
}

function createTimeOutEvent(dateTime) {
  let event = {
    type: "TimeOut",
    hour: parseInt(dateTime.split(' ')[1], 10),
    date: dateTime.split(' ')[0]
  };
  this.timeOutEvents = [...this.timeOutEvents, event];
  return this;
}

function hoursWorkedOnDate(date) {
  let hoursWorked = 0;
  for(let i = 0; i < this.timeInEvents.length; i++) {
    if (this.timeInEvents[i].date === date) {
      hoursWorked = (this.timeOutEvents[i].hour - this.timeInEvents[i].hour) / 100;
    }
  }
  return hoursWorked;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);

  return hoursWorked * this.payPerHour;
}

function findEmployeeByFirstName(employees, name) {
  let employee;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].firstName === name) {
      employee = employees[i];
    }
  }
  return employee;
}

function calculatePayroll(employees) {
  let total = 0;
  for(let i = 0; i < employees.length; i++) {
    total += allWagesFor.call(employees[i]);
  }
  return total;
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