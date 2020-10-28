/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(eData){
    let record = {};
    record.firstName = eData[0];
    record.familyName = eData[1];
    record.title = eData[2];
    record.payPerHour = eData[3];
    record.timeInEvents = [];
    record.timeOutEvents = [];
    return record;
}

let createTimeInEvent = function(dateTime){
    let newEvent = {};
    let date = dateTime.split(" ");
    newEvent.type = "TimeIn";
    newEvent.hour = parseInt(date[1]);
    newEvent.date = date[0];
    this.timeInEvents.push(newEvent);
    return this;
}
  
let createTimeOutEvent = function(dateTime){
    let newEvent = {};
    let date = dateTime.split(" ");
    newEvent.type = "TimeOut";
    newEvent.hour = parseInt(date[1]);
    newEvent.date = date[0];
    this.timeOutEvents.push(newEvent);
    return this;
}

function createEmployeeRecords(newRecords){
    return newRecords.map(function(item){
        return createEmployeeRecord(item);
    });
}

let hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(e => e.date === date).hour;
    let timeOut = this.timeOutEvents.find(e => e.date === date).hour;
    return (timeOut - timeIn) / 100;
}

let wagesEarnedOnDate = function(date){
    return this.payPerHour * hoursWorkedOnDate.call(this, date);
}

function calculatePayroll(employees){
    let payroll = 0;
    employees.forEach(function(e){
      payroll += allWagesFor.call(e);
    })
    return payroll;
}

function findEmployeeByFirstName(employees, find){
    return employees.find(e => e.firstName === find)    
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}