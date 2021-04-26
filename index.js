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

let createEmployeeRecord = function(array) {
	return {
		firstName: array[0],
		familyName: array[1],
		title: array[2],
		payPerHour: array[3],
		timeInEvents: [],
		timeOutEvents: []
	}
}

let createEmployeeRecords = function(employeeData) {
	return employeeData.map(employee => createEmployeeRecord(employee))
}

let createTimeInEvent = function(dateStamp) {
	let dateTime = dateStamp.split(' ')

	this.timeInEvents.push({
		type: "TimeIn",
		hour: parseInt(dateTime[1]),
		date: dateTime[0]
	})
	return this
}


let createTimeOutEvent = function (dateStamp) {
	let dateTime = dateStamp.split(' ')

	this.timeOutEvents.push({
		type: "TimeOut",
		hour: parseInt(dateTime[1]),
		date: dateTime[0]
	})
	return this
}

let hoursWorkedOnDate = function(dateWorked) {
	let inTime = this.timeInEvents.find(function(e) {
		return e.date === dateWorked
	})
	let outTime = this.timeOutEvents.find(function(e) {
		return e.date === dateWorked
	})

	return (outTime.hour - inTime.hour) / 100
}

let wagesEarnedOnDate = function(dateWorked) {
	let wage = hoursWorkedOnDate.call(this, dateWorked) * this.payPerHour
	return parseFloat(wage.toString())
}

let findEmployeeByFirstName = function (srcArray, firstName) {
	return srcArray.find((rec) => {
		return rec.firstName === firstName
	})
}

let calculatePayroll = function (records) {
	return records.reduce(function(total, record) {
		return total + allWagesFor.call(record)
	}, 0)
}
