/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
let createEmployeeRecord = function (employeeAttributes) {
  let employee = {
    firstName: employeeAttributes[0],
    familyName: employeeAttributes[1],
    title: employeeAttributes[2],
    payPerHour: employeeAttributes[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employee;
};
let createEmployeeRecords = function (employeeArrays) {
  const employees = employeeArrays.map((employeeArray) =>
    createEmployeeRecord(employeeArray)
  );
  return employees;
};

let createTimeInEvent = function (dateStamp) {
  const dateTime = dateStamp.split(" ");
  const timeInEvent = {
    type: "TimeIn",
    hour: parseInt(dateTime[1]),
    date: dateTime[0],
  };
  this.timeInEvents.push(timeInEvent);
  return this;
};

let createTimeOutEvent = function (dateStamp) {
  const dateTime = dateStamp.split(" ");
  const timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(dateTime[1]),
    date: dateTime[0],
  };
  this.timeOutEvents.push(timeOutEvent);
  return this;
};

let hoursWorkedOnDate = function (date) {
  const timeIn = this.timeInEvents.find((time) => time.date === date).hour;
  const timeOut = this.timeOutEvents.find((time) => time.date === date).hour;
  const hours = (timeOut - timeIn) / 100;
  return hours;
};

let wagesEarnedOnDate = function (date) {
  const hours = hoursWorkedOnDate.call(this, date);
  const wages = hours * this.payPerHour;
  return wages;
};

let calculatePayroll = function (employees) {
  //go through each employee and do allWagesFor on each
  const employeeWages = employees.map((employee) => allWagesFor.call(employee));
  const payroll = employeeWages.reduce((acc, cur) => acc + cur, 0);
  return payroll;
};

let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

function findEmployeeByFirstName(srcArray, firstName) {
  const employee = srcArray.find(
    (employee) => employee.firstName === firstName
  );
  return employee;
}
