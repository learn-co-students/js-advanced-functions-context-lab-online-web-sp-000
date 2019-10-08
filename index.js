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

function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(employeeArray) {
  return employeeArray.map(employee => createEmployeeRecord(employee));
}

function createTimeInEvent(timestamp){
  let time = timestamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(time[1]),
    date: time[0]
  });
  return this;
}

function createTimeOutEvent(timestamp) {
  let time = timestamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(time[1]),
    date: time[0]
  });
  return this;
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(obj => obj.date === date);
  let timeOut = this.timeOutEvents.find(obj => obj.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
  const hours = hoursWorkedOnDate.call(this, date);
  return hours * this.payPerHour;
}

function findEmployeebyFirstName(employeeArray, firstName) {
  return employeeArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll (employeeArray) {
  return employeeArray.reduce((total, employee) => total + allWagesFor.call(employee), 0);
}
