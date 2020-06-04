/* Your Code Here */
function createEmployeeRecord(employee){
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(employees){
  return employees.map(employee => createEmployeeRecord(employee));
}

function createTimeInEvent(time){
  const splitTime = time.split(' ');
  const date = splitTime[0];
  const hour = parseInt(splitTime[1]);
  this.timeInEvents.push({type: "TimeIn", date: date, hour: hour});
  return this;
}

function createTimeOutEvent(time){
  const splitTime = time.split(' ');
  const date = splitTime[0];
  const hour = parseInt(splitTime[1]);
  this.timeOutEvents.push({type: "TimeOut", date: date, hour: hour});
  return this;
}

function hoursWorkedOnDate(date){
  const timeIn = this.timeInEvents.find(event => event.date == date);
  const startingHour = parseInt(timeIn.hour);
  const timeOut = this.timeOutEvents.find(event => event.date == date);
  const endingHour = parseInt(timeOut.hour);
  return (endingHour - startingHour)/100;
}

function wagesEarnedOnDate(date){
  return this.payPerHour * hoursWorkedOnDate.call(this, date);
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

function payrollExpense(){
  return this.reduce((total, employee) => total + employee.allWagesFor());
}

function findEmployeeByFirstName(employees, firstName){
  return employees.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords){
  return employeeRecords.reduce((total, employee) => total + allWagesFor.call(employee), 0);
}
