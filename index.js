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

function createEmployeeRecord(srcArray){

    const obj = {
        firstName: srcArray[0],
        familyName: srcArray[1],
        title: srcArray[2],
        payPerHour: srcArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return obj
}

function createEmployeeRecords(objects){
    return objects.map(e => createEmployeeRecord(e))
}

function createTimeInEvent(dateStamp){
    const event = {
        type: "TimeIn",
        date: dateStamp.split(" ")[0],
        hour: parseInt(dateStamp.split(" ")[1])
    }
    this.timeInEvents.push(event);
    return this;
}

function createTimeOutEvent(dateStamp) {
  const event = {
    type: "TimeOut",
    date: dateStamp.split(" ")[0],
    hour: parseInt(dateStamp.split(" ")[1])
  }

  this.timeOutEvents.push(event)
  return this
}


function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find(e => e.date === date)
    let timeOut = this.timeOutEvents.find(e => e.date === date)

    return (timeOut.hour - timeIn.hour) / 100
}


function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((e) => e.firstName === firstName);
}

function calculatePayroll(array) {
  return array.reduce((total, element) => allWagesFor.call(element) + total, 0);
}