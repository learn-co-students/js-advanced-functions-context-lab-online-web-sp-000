function createEmployeeRecord([firstName, familyName, title, payRate]) {
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payRate,
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(array) {
  return array.map(element => createEmployeeRecord(element));
}

function createTimeInEvent(dateStamp) {
  const [date, time] = dateStamp.split(' ');
  this.timeInEvents.push({date: date, hour: parseInt(time), type: "TimeIn"});
  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, time] = dateStamp.split(' ');
  this.timeOutEvents.push({date: date, hour: parseInt(time), type: "TimeOut"});
  return this;
}

function hoursWorkedOnDate(dateStamp) {
  let timeIn = this.timeInEvents.find(event => event.date === dateStamp);
  let timeOut = this.timeOutEvents.find(event => event.date === dateStamp);
  return ((timeOut.hour - timeIn.hour)/100);
}

function wagesEarnedOnDate(dateStamp) {
  return (hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour);
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

function calculatePayroll(employees) {
  return employees.reduce((totalPay, employee) => totalPay + allWagesFor.call(employee), 0);
}

function findEmployeeByFirstName(employees, firstName) {
  return employees.find(employee => employee.firstName === firstName);
}
