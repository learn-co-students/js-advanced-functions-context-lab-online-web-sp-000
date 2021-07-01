/* Your Code Here */
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

// Converts each nested Array into an employee record and accumulates it to a new Array
function createEmployeeRecords(employeesData){
  return employeesData.map(createEmployeeRecord)
};

function createTimeInEvent(dateStamp) { // dateStamp => "YYYY-MM-DD HHMM"
  let [date, hour] = dateStamp.split(' ');
  let timeInEvent = {
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  };
  this.timeInEvents.push(timeInEvent);
  return this
};
//createTimeInEvent.call(employeeRec, dateStamp)

// Add timeOut event Object to an employee's record of timeOutEvents when provided an 
// employee rec and Date/Time String and returns the updated record
function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(' ');
  let timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  }
  this.timeOutEvents.push(timeOutEvent);
  return this;
}
//createTimeOutEvent.call(employeeRec, date)

// calculates the hours worked when given an employee record and a date ("YYYY-MM-DD")
function hoursWorkedOnDate(date) {
  let timeInEvent = this.timeInEvents.find(event => event.date === date);
  let timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  return (timeOutEvent.hour - timeInEvent.hour) / 100;
};
// hoursWorkedOnDate.call(employeeRec, date)

// multiplies the hours worked by the employee's rate per hour
function wagesEarnedOnDate(date) {
  let hoursWorked = hoursWorkedOnDate.call(this, date);
  let payOwed = hoursWorked * this.payPerHour;
  return payOwed;
};
// wagesEarnedOnDate.call(employeeRec, date)
 
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

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employeeRec => employeeRec.firstName === firstName);
};

// Given an array of multiple employees
// aggregates all the dates' wages and adds them together
function calculatePayroll(employeesRecs) {
  return employeesRecs.reduce((memo, employeeRec) => memo + allWagesFor.call(employeeRec), 0);
};