/* Your Code Here */
function createEmployeeRecord(array){
let object = {};
  object.firstName = array[0]
  object.familyName = array[1]
  object.title = array[2]
  object.payPerHour = array[3]
  object.timeInEvents = []
  object.timeOutEvents = []
return object
}

function createEmployeeRecords(arrayOfArray){
  let newEmployee = [];
  newEmployee = arrayOfArray.map(createEmployeeRecord)
  return newEmployee;
}
function createTimeInEvent(dateStamp){
  let dateStampSplit = dateStamp.split(' ')
  let newDateStamp = {type: "TimeIn", date: dateStampSplit[0], hour: parseInt(dateStampSplit[1])}
  this.timeInEvents.push(newDateStamp)
  return this
}

function createTimeOutEvent(dateStamp){
  let dateStampSplit = dateStamp.split(' ')
  let newDateStamp = {type: "TimeOut", date: dateStampSplit[0], hour: parseInt(dateStampSplit[1])}
  this.timeOutEvents.push(newDateStamp)
  return this
}

function hoursWorkedOnDate(date){
  let clockIn, clockOut;
  const matchingIn = this.timeInEvents.find(element => element.date == date);
  //console.log(matchingIn)
    clockIn = matchingIn.hour
  const matchingOut = this.timeOutEvents.find(element => element.date == date);
  //console.log(matchingOut)
    clockOut = matchingOut.hour

  let total = (clockOut - clockIn)/100
  //console.log(clockIn, clockOut, total)
  return total
}

function wagesEarnedOnDate(date){
  let payRate = this.payPerHour
  return hoursWorkedOnDate.call(this, date) * payRate;
}

function findEmployeeByFirstName(srcArray, name){
  let match = srcArray.find(element => element.firstName == name);
  return match
}

function calculatePayroll(array){
  let total = 0;
  array.forEach(element => total += allWagesFor.call(element))
  return total
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
