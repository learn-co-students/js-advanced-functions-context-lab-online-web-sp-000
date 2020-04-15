/* Your Code Here */
function createEmployeeRecord(attributesArray) {
  return {
    firstName: attributesArray[0],
    familyName: attributesArray[1],
    title: attributesArray[2],
    payPerHour: attributesArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map(e => createEmployeeRecord(e))
}

function createTimeInEvent(dateStamp) {
  let dateTime = dateStamp.split(' ')
  this.timeInEvents.push({type: "TimeIn", hour: parseInt(dateTime[1]), date: dateTime[0]})
  return this
}

function createTimeOutEvent(dateStamp) {
  let dateTime = dateStamp.split(' ')
  this.timeOutEvents.push({type: "TimeOut", hour: parseInt(dateTime[1]), date: dateTime[0]})
  return this
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.filter( e => e.date === date )[0]
  let timeOut = this.timeOutEvents.filter( e => e.date === date )[0]

  return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
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

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.filter( e => e.firstName === firstName )[0]
}

let calculatePayroll = function (array) {
  let totalWages = array.map( e => allWagesFor.call(e))
  return totalWages.reduce((wages, total) => wages + total, 0)
}
