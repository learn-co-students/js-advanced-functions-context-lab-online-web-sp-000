/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function () {
//   console.log(this)
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

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
  const args = Array.from(arguments)
  this.timeInEvents.push(
    {
      type: "TimeIn",
      hour: parseInt(args[0].split(' ')[1]),
      date: args[0].split(' ')[0]
    })
  return this
}

let createTimeOutEvent = function(){
  const args = Array.from(arguments)
  this.timeOutEvents.push(
    {
      type: "TimeOut",
      hour: parseInt(args[0].split(' ')[1]),
      date: args[0].split(' ')[0]
    })
  return this
}

let hoursWorkedOnDate = function(){
  const args = Array.from(arguments)
  return (parseInt(this.timeOutEvents.find(timeIn => timeIn.date == args[0]).hour) - parseInt(this.timeInEvents.find(timeIn => timeIn.date == args[0]).hour))/100
}

let wagesEarnedOnDate = function(){
  const args = Array.from(arguments)
  return hoursWorkedOnDate.call(this, args[0]) * this.payPerHour
}

let allWagesFor = function(){
  let thisToo = this
  return this.timeInEvents.map(day => day.date).reduce(function(memo, d) { return memo + wagesEarnedOnDate.call(thisToo, d)}, 0)
}

function findEmployeeByFirstName(employees, firstName){
  return employees.find(employee => employee.firstName == firstName)
}

function calculatePayroll(employees){
  return employees.reduce( function(memo, employee){ return memo + allWagesFor.call(employee)}, 0)
}
