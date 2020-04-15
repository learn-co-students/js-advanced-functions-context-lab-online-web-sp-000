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

let createEmployeeRecord = function (array) {
  const [firstName, familyName, title, payPerHour] = array
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  }
}

//this === array
let createEmployeeRecords = function (array) {
  return array.map(m => createEmployeeRecord(m))
}

let createTimeEvent = function(){
  const [date, hour] = this.dateTime.split(' ')
  const timeInObject = {
    type: this.type,
    hour: parseInt(hour, 10),
    date: date
  }
  return timeInObject
}

let createTimeInEvent = function(dateTime){
  this.timeInEvents.push(createTimeEvent.call({dateTime, type: "TimeIn"}))
  return this
}

let createTimeOutEvent = function(dateTime){
  this.timeOutEvents.push(createTimeEvent.call({dateTime, type: "TimeOut"}))
  return this
}

let findHour = function(date) {
  return this.find(m => m.date === date).hour
}

let hoursWorkedOnDate = function(date){
  return (findHour.call(this.timeOutEvents, date) - findHour.call(this.timeInEvents, date))/100
}

let wagesEarnedOnDate = function(date){
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let findEmployeeByFirstName = function(array, firstName) {
  return array.find(e => e.firstName === firstName)
}

let calculatePayroll = function(array){
  return array.map(e => allWagesFor.call(e)).reduce((t, e) => t + e)
}
