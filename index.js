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
// let createEmployeeRecord = function (firstName, familyName, title, ) {
//   this.firstName = firstName
//   this.familyName = familyName
//   this.title = title
//   this.payPerHour = payPerHour
// }

function createEmployeeRecord(array) {
  let obj = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3]
   }
obj.timeInEvents = []
obj.timeOutEvents = []
return obj
  }

function createEmployeeRecords(arrays) {
  const record = arrays.map(x => createEmployeeRecord(x))
 return record
}

function createDSObj(getType, dateStamp) {
    return {type: getType, date: dateStamp.slice(0,10), hour: parseInt(dateStamp.slice(-4))}
}


let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let createTimeOutEvent = function(dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
})
return this
}

let hoursWorkedOnDate = function(soughtDate){
  let timeIn = this.timeInEvents.find(function(e){
    return e.date === soughtDate
})
  let timeOut = this.timeOutEvents.find(function(e){
    return e.date === soughtDate
  })
  return (timeOut.hour - timeIn.hour) / 100
}

//
// function wagesEarnedOnDate(recordObj, dateStamp) {
//    const wages = hoursWorkedOnDate(recordObj, dateStamp) * recordObj.payPerHour
//   return wages
// }

let wagesEarnedOnDate = function(soughtDate){
  let wage = hoursWorkedOnDate.call(this, soughtDate) * this.payPerHour
  return parseFloat(wage.toString())
}

// function calculatePayroll(employeeRecords) {
//     const totalPay = employeeRecords.reduce(((total, record) => total + allWagesFor(record)), 0);
//     return totalPay;
//   }

let calculatePayroll = function(employeeRecords) {
  return employeeRecords.reduce(function(memo, record){
    return memo + allWagesFor.call(record)
  }, 0)
}

function findEmployeeByFirstName(srcArray, firstName){
  return srcArray.find(record => record.firstName === firstName);
}
