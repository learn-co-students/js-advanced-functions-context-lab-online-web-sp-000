function createEmployeeRecord(arr){
  let record = {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [], 
    timeOutEvents: []
  };
  return record;
}

function createEmployeeRecords(arr){
  return arr.map(createEmployeeRecord);
}

function dateStamper(time, dateStamp){
  return {type: time, date: dateStamp.split(' ')[0], hour: parseInt(dateStamp.slice(-4))};
}

function createTimeInEvent(dateStamp){
  this.timeInEvents.push(dateStamper('TimeIn', dateStamp));
  return this;
}

function createTimeOutEvent(dateStamp){
  this.timeOutEvents.push(dateStamper('TimeOut', dateStamp));
  return this;
}

function hoursWorkedOnDate(workDate){
  let timeIn = this.timeInEvents.find(event => event.date === workDate).hour;
  let timeOut = this.timeOutEvents.find(event => event.date === workDate).hour;
  return (timeOut - timeIn)/100;
}

function wagesEarnedOnDate(workDate){
  const money = this.payPerHour;
  let hours = hoursWorkedOnDate.call(this, workDate);
  return money * hours;
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

function calculatePayroll(records){
  let allWages = records.map(record => allWagesFor.call(record));
  return allWages.reduce((total, wage) => wage + total);
}

function findEmployeeByFirstName(records, name){
  return records.find(employee => employee.firstName === name);
}
