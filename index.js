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

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    "firstName": firstName,
    "familyName": familyName,
    "title": title,
    "payPerHour": payPerHour,
    "timeInEvents": [],
    "timeOutEvents": []
  }
}

function createEmployeeRecords(employeeData) {
  return employeeData.map(createEmployeeRecord);
}

function createTimeInEvent(date_s) {
  let [date, hour] = date_s.split(' ');
  let timeInEvent = {
      type: "TimeIn",
      hour: Number(hour),
      date: date
  }
  this.timeInEvents.push(timeInEvent)
  return this;
}

function createTimeOutEvent(date_s) {
  let [date, hour] = date_s.split(' ');
  let timeOutEvent = {
      type: "TimeOut",
      hour: Number(hour),
      date: date
  }
  this.timeOutEvents.push(timeOutEvent)
  return this;
}

function hoursWorkedOnDate(date_s) {
  const timeInHr = this.timeInEvents.find(timeIn => timeIn.date == date_s).hour;
  const timeOutHr = this.timeOutEvents.find(timeOut => timeOut.date == date_s).hour;
  return (timeOutHr - timeInHr)/100;
}

function wagesEarnedOnDate(data_s) {
  // multiplies the hours worked by the employee's rate per hour
  return hoursWorkedOnDate.call(this, data_s) * this.payPerHour;
}

function calculatePayroll(array) {
    return array.map(employeeRecord => employeeRecord.timeInEvents.map(record => wagesEarnedOnDate.call(employeeRecord, record.date)).reduce((a, b) => a + b)).reduce((a, b) => a + b);
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find(x => x.firstName == firstNameString)
}
