/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord([firstName, familyName, title, payRate]){
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payRate,
    timeInEvents: [],
    timeOutEvents: []
  }
}

let createEmployeeRecords = function (empArray) {
	return empArray.map(emp => createEmployeeRecord(emp));
}

function createTimeInEvent(dateStamp) {
	let date = dateStamp.split(" ")[0]
	let hour = parseInt(dateStamp.split(" ")[1], 10)
	this.timeInEvents.push({
		type: "TimeIn",
		date: date,
		hour: hour
	})
	return this
}

function createTimeOutEvent(dateStamp) {
	let date = dateStamp.split(" ")[0]
	let hour = parseInt(dateStamp.split(" ")[1], 10)
	this.timeOutEvents.push({
		type: "TimeOut",
		date: date,
		hour: hour
	})
	return this
}

let hoursWorkedOnDate = function(dateString) {
	let timeInRecord = this.timeInEvents.find( timeInEvent => timeInEvent.date === dateString)
	let timeOutRecord = this.timeOutEvents.find( timeOutEvent => timeOutEvent.date === dateString)
	return (timeOutRecord.hour - timeInRecord.hour) / 100
}

let wagesEarnedOnDate = function(dateString) {
	return hoursWorkedOnDate.call(this, dateString) * this.payPerHour
}

let findEmployeeByFirstName = function(eRecords, fName) {
	return eRecords.find( eRecord => eRecord.firstName === fName)
}

function calculatePayroll(eRecords) {
	return eRecords.reduce((memo, e) => memo + allWagesFor.call(e), 0) 
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}