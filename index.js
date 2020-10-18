function createEmployeeRecord(data) {
	return {
		firstName: data[0],
		familyName: data[1],
		title: data[2],
		payPerHour: data[3],
		timeInEvents: [],
		timeOutEvents: []
	}
}

function createEmployeeRecords(records) {
	return records.map(createEmployeeRecord)
}

function createTimeInEvent(stamp) {
	const dateTime = stamp.split(' ')
	this.timeInEvents.push({
		type: 'TimeIn',
		date: dateTime[0],
		hour: parseInt(dateTime[1])
	})
	return this
}

function createTimeOutEvent(stamp) {
	const dateTime = stamp.split(' ')
	this.timeOutEvents.push({
		type: 'TimeOut',
		date: dateTime[0],
		hour: parseInt(dateTime[1])
	})
	return this
}

function hoursWorkedOnDate(date) {
	const a = this.timeInEvents.find(item => item.date === date)
	const b = this.timeOutEvents.find(item => item.date === date)
	return parseInt(b.hour - a.hour) / 100
}

function wagesEarnedOnDate(date) {
	return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function allWagesFor() {
	const workDays = this.timeInEvents.map(inItem => {
		return wagesEarnedOnDate.call(this, inItem.date)
	})
	return workDays.reduce((total, num) => total += num)
}

function findEmployeeByFirstName(srcArray, firstName) {
	return srcArray.find(item => item.firstName === firstName)
}

function calculatePayroll(records) {
	const empPay = records.map(record => allWagesFor.call(record))
	return empPay.reduce((total, num) => total += num)
}
