/* Your Code Here */

function createEmployeeRecord(array){
	const employeeObj = {
		firstName: array[0], 
		familyName: array[1], 
		title: array[2], 
		payPerHour: array[3], 
		timeInEvents: [], 
		timeOutEvents: []
	};
	return employeeObj;
}

function createEmployeeRecords(arrays){
	const employees = arrays.map(array => createEmployeeRecord(array));
	return employees;
}

function createTimeInEvent(timeStamp){
	const s = timeStamp.indexOf(" ")
	const h = parseInt(timeStamp.slice(s+1));
	const d = timeStamp.slice(0, s)
	this.timeInEvents.push({
		type: "TimeIn",
		hour: h,
		date: d
	})
	return this
}

function createTimeOutEvent(timeStamp){
	const s = timeStamp.indexOf(" ")
	const h = parseInt(timeStamp.slice(s+1));
	const d = timeStamp.slice(0, s)
	this.timeOutEvents.push({
		type: "TimeOut",
		hour: h,
		date: d
	})
	return this
}

function hoursWorkedOnDate(date){
	const timeIn = this.timeInEvents.filter(t => t.date === date)[0].hour
	const timeOut = this.timeOutEvents.filter(t => t.date === date)[0].hour
	const hoursWorked = (timeOut - timeIn) / 100

	return hoursWorked
}

function wagesEarnedOnDate(date){
	const hours = hoursWorkedOnDate.bind(this)
	const wagesEarned = hours(date) * this.payPerHour
	return wagesEarned
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

function findEmployeeByFirstName(srcArray, firstName){
	const employee = srcArray.filter(e => e.firstName === firstName)[0]
	return employee
}

function calculatePayroll(employeesArray){
	let totalPayroll = 0;
	employeesArray.forEach(function(employee){
		const thisEmployeePay = allWagesFor.bind(employee)
		totalPayroll += thisEmployeePay(employee)
	})
	return totalPayroll;
}