/* Your Code Here */
function createEmployeeRecord(arr){
  const employee = {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return employee
}

function createEmployeeRecords(arr) {
  const employees = arr.map(function(e){return createEmployeeRecord(e)})
  return employees
}

function createTimeInEvent(time) {
  const timearr = time.split(" ")
  const timeIn = {type: "TimeIn",
                  hour: parseInt(timearr[1]),
                  date: timearr[0]}
  this.timeInEvents.push(timeIn)
  return this
}

function createTimeOutEvent(time){
  const timearr = time.split(" ")
  const timeOut = {type: "TimeOut",
                   hour: parseInt(timearr[1]),
                   date: timearr[0]}
  this.timeOutEvents.push(timeOut)
  return this
}

function hoursWorkedOnDate(date){
  const timeIn = this.timeInEvents.find(e => e.date === date).hour
  const timeOut = this.timeOutEvents.find(e => e.date === date).hour
  return (timeOut - timeIn)/100
}


function wagesEarnedOnDate(date){
  const hours = hoursWorkedOnDate.call(this, date)
  return hours * this.payPerHour
}

function calculatePayroll(employees){
  return employees.reduce((t, e) => t + allWagesFor.call(e), 0)
}

function findEmployeeByFirstName(employees, name){
  return employees.find(s => s.firstName === name)
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
