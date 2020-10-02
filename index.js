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

// Your code here
function createEmployeeRecord(empInfo){
  return {
    firstName: empInfo[0],
    familyName: empInfo[1],
    title: empInfo[2],
    payPerHour: empInfo[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(empsInfo){
  return empsInfo.map( empInfo => createEmployeeRecord(empInfo))
}

let createTimeInEvent = function(){
  console.log(this)
  console.log(this.timeInEvents)
  console.log(arguments[0])
  let timeInEvent = this.timeInEvents.push(
    {
      type: "TimeIn",
      hour: parseInt(arguments[0].split(' ')[1]),
      date: arguments[0].split(' ')[0]
    })
  // console.log(timeInEvent)
}

function createTimeOutEvent(empRecord, date){
  empRecord.timeOutEvents.push(
  {
    type: "TimeOut",
    hour: parseInt(date.split(' ')[1]),
    date: date.split(' ')[0]
  })
  return empRecord
}

function hoursWorkedOnDate(empRecord, date){
  return (parseInt(empRecord.timeOutEvents.find(timeIn => timeIn.date == date).hour) - parseInt(empRecord.timeInEvents.find(timeIn => timeIn.date == date).hour))/100
}

function wagesEarnedOnDate(empRecord, date){
  return hoursWorkedOnDate(empRecord, date) * empRecord.payPerHour
}

// function allWagesFor(empRecord){
//    return empRecord.timeInEvents.map(day => day.date).reduce(function(memo, d) { return memo + wagesEarnedOnDate(empRecord, d)}, 0)
// }

function findEmployeeByFirstName(employees, firstName){
  return employees.find(employee => employee.firstName == firstName)
}

function calculatePayroll(employees){
  return employees.reduce( function(memo, employee){ return memo + allWagesFor(employee)}, 0)
}

