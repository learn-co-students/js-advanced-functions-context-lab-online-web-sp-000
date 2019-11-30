function createEmployeeRecord(employee) {
  let employeeRecord ={
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return employeeRecord;
}

function createEmployeeRecords(employees) {
    return employees.map((item)=>createEmployeeRecord(item))
}


function createTimeInEvent(dateStamp) {
  let timeIn={
    type:"TimeIn",
    date:dateStamp.split(" ")[0],
    hour:parseInt(dateStamp.split(" ")[1])
  }
  this.timeInEvents.push(timeIn)
  return this
}

function createTimeOutEvent(dateStamp) {
  let timeOut={
    type:"TimeOut",
    date:dateStamp.split(" ")[0],
    hour:parseInt(dateStamp.split(" ")[1])
  }
  this.timeOutEvents.push(timeOut)
  return this
}

function hoursWorkedOnDate(date) {
  let inn=this.timeInEvents.find((i)=>i.date===date).hour
  let out=this.timeOutEvents.find((i)=>i.date===date).hour

  return (out-inn)/100;
}

function wagesEarnedOnDate(date) {
  let hours=hoursWorkedOnDate.call(this,date)
  let hourlyPay=this.payPerHour
  return hours*hourlyPay
}

function calculatePayroll(recordObjects) {
  let wagePerEmp=recordObjects.map((item)=>allWagesFor.call(item))
    return wagePerEmp.reduce((total,item)=>(total+item))
}

function findEmployeeByFirstName(recordObjects,firstName) {
  return recordObjects.find((item)=>item.firstName===firstName)
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
