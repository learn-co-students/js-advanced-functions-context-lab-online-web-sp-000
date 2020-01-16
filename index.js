/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(inputFields) {
  const record = {}
    record.firstName = inputFields["0"]
    record.familyName = inputFields["1"]
    record.title = inputFields["2"]
    record.payPerHour = inputFields["3"]
    record.timeInEvents = []
    record.timeOutEvents = []
  return record
}

function createEmployeeRecords(inputArray) {
  return inputArray.map(function(inputSet){
     return createEmployeeRecord(inputSet);
   });
 }


 function createTimeInEvent(dateStamp) {
  const timeInObject = {}
  timeInObject.type = "TimeIn"
  timeInObject.date = dateStamp.split(' ')[0]
  timeInObject.hour = parseInt(dateStamp.split(' ')[1])

  this.timeInEvents.push(timeInObject)
  return this
}

 function createTimeOutEvent(dateStamp) {
  const timeOutObject = {}
  timeOutObject.type = "TimeOut"
  timeOutObject.date = dateStamp.split(' ')[0]
  timeOutObject.hour = parseInt(dateStamp.split(' ')[1])

  this.timeOutEvents.push(timeOutObject)
  return this
}

function hoursWorkedOnDate(inputDate) {
  const selectedHourStart = this.timeInEvents.find( function(event) {
    if (event.date === inputDate){
      return true;
    }
  });

  const selectedHourEnd = this.timeOutEvents.find( function(event) {
    if (event.date === inputDate){
      return true;
    }
  });

  const hoursWorked = (selectedHourEnd.hour - selectedHourStart.hour)/100
  return hoursWorked
}


function wagesEarnedOnDate(inputDate) {
  return hoursWorkedOnDate.call(this, inputDate) * this.payPerHour
}



let allWagesFor = function() {
  let totalHours = this.timeInEvents.map(function(timeEvent) {
    return timeEvent.date
  })

  let totalPayable = totalHours.reduce(function(initialHours, specifiedDate) {return initialHours + wagesEarnedOnDate.call(this, specifiedDate);}.bind(this), 0);

  return totalPayable;
}

function findEmployeeByFirstName(srceArray, firstName) {
  return srceArray.find(function(record){
    if(record.firstName === firstName){
      return record;
    }
  })
}

function calculatePayroll(employees) {
  return employees.reduce(function(initialPayroll, employee) {
    return initialPayroll + allWagesFor.call(employee);
  }, 0);
}