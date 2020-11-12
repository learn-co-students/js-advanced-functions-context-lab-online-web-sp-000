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

function createEmployeeRecord(employee) {
  const record = {
    "firstName": employee[0],
    "familyName": employee[1],
    "title": employee[2],
    "payPerHour": employee[3],
    "timeInEvents": [],
    "timeOutEvents": []
  };
  return record
};

function createEmployeeRecords(employees) {
  return employees.map(x => createEmployeeRecord(x));
};

function createTimeInEvent(time){
  this.timeInEvents.push({
    "type": "TimeIn",
    "date": time.split(' ')[0],
    "hour": parseInt(time.split(' ')[1])
  });
  return this
};

function createTimeOutEvent(time){
  this.timeOutEvents.push({
    "type": "TimeOut",
    "date": time.split(' ')[0],
    "hour": parseInt(time.split(' ')[1])
  });
  return this
};

function hoursWorkedOnDate(day) {
  let timeIn = this.timeInEvents.find(x => x.date === day);
  let timeOut = this.timeOutEvents.find(x => x.date === day);
  return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(day) {
  return hoursWorkedOnDate.call(this, day) * this.payPerHour;
};

function allWagesFor() {
  let dates = this.timeInEvents.map(x => x.date);
  let wages = dates.map(x => wagesEarnedOnDate.call(this, x));
  return wages.reduce((total, value) => total + value);
};

function calculatePayroll(employee) {
  return employee.map(x => allWagesFor.call(x)).reduce((total, value) => total + value, 0);
}

function findEmployeeByFirstName(employees, name) {
  return employees.find(x => x.firstName === name)
}
