/* Your Code Here */
let createEmployeeRecord = function(arr){
  return{
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

let createEmployeeRecords = function (arr) {
  return arr.map(function(arr){
    return createEmployeeRecord(arr)
  })
}

let createTimeInEvent = function(dateStamp) {
  let [date, hour] = dateStamp.split(" ")

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  })
  return this
}

let createTimeOutEvent = function(dateStamp) {
  let [date, hour] = dateStamp.split(" ")

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  })
  return this
}

let hoursWorkedOnDate = function(dateWorked) {
  let timeIn = this.timeInEvents.find(function(x){
    return x.date === dateWorked
  })

  let timeOut = this.timeOutEvents.find(function(x){
    return x.date === dateWorked
  })
  return (timeOut.hour - timeIn.hour)/100
}

let wagesEarnedOnDate = function(dateWorked) {
  let pay = hoursWorkedOnDate.call(this, dateWorked) * this.payPerHour
  return parseFloat(pay.toString())
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

let findEmployeeByFirstName = function(arr, firstName) {
  return arr.find(function(name){
    return name.firstName === firstName
  })
}

let calculatePayroll = function(records) {
  return records.reduce(function(ammount, record){
    return ammount + allWagesFor.call(record)
  }, 0)
}
