/* Your Code Here */

function createEmployeeRecord(employee) {
  return {
      firstName: employee[0],
      familyName: employee[1],
      title: employee[2],
      payPerHour: employee[3],
      timeInEvents: [],
      timeOutEvents: []
  };
};

function createEmployeeRecords(employees) {
  return employees.map(employee => createEmployeeRecord(employee));
};

function createTimeInEvent(timeIn) {
  const dateTime = timeIn.split(' ');
  this.timeInEvents.push({
    type: "TimeIn",
    date: dateTime[0],
    hour: parseInt(dateTime[1], 10)
  });
  return this;
};

function createTimeOutEvent(timeOut) {
  const dateTime = timeOut.split(' ');
  this.timeOutEvents.push({
    type: "TimeOut",
    date: dateTime[0],
    hour: parseInt(dateTime[1], 10)
  });
  return this;
};

function hoursWorkedOnDate(date) {
  return (this.timeOutEvents.find(event => event.date === date).hour - this.timeInEvents.find(event => event.date === date).hour)/100;
};

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

function calculatePayroll(employees) {
  return employees.reduce((total, employee) => total += allWagesFor.call(employee), 0);
};

function findEmployeeByFirstName(employees, firstName) {
  return employees.find(employee => employee.firstName === firstName);
};

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
