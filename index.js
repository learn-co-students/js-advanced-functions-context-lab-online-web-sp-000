/* Your Code Here */
let createEmployeeRecord = function(row) {
  return {
    firstName: row[0],
    familyName: row[1],
    title: row[2],
    payPerHour: row[3],
    timeInEvents: [],
    timeOutEvents: [],
  }
}

let createEmployeeRecords = function(employeeRowData){
  return employeeRowData.map( function(row){
    return createEmployeeRecord(row)
  })
}

//reminder that we are using this as our name - an explicit override
let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let createTimeOutEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(' ')

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  })

  return this
}

let hoursWorkedOnDate = function(soughtDate){
  let clockIn = this.timeInEvents.find(function(e){
    return e.date === soughtDate
  })

  let clockOut = this.timeOutEvents.find(function(e){
    return e.date === soughtDate
  })

  return (clockOut.hour - clockIn.hour)/100
}

//reminder parseFloat() returns a value that will convert into a string and
//return a floating point number
let wagesEarnedOnDate = function(dateSought){
  let rawWage = hoursWorkedOnDate.call(this, dateSought) * this.payPerHour
  return parseFloat(rawWage)
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

let calculatePayroll = function(arrayOfEmployees){
  return arrayOfEmployees.reduce(function(memo, rec){
    return memo + allWagesFor(rec)
  }, 0)
}

let findEmployeeByFirstName = function(srcArray, firstName){
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}
