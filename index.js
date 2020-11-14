/* Your Code Here */

const createEmployeeRecord = function (arr) {
	// ["Gray", "Worm", "Security", 1]
	return {
		firstName: arr[0],
		familyName: arr[1],
		title: arr[2],
		payPerHour: arr[3],
		timeInEvents: [],
		timeOutEvents: []
	}
}

const createEmployeeRecords = function (dataRows) {
	return dataRows.map(function(row){
      return createEmployeeRecord(row)
  })
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

let createTimeOutEvent = function(dateStamp){
	let [date, hour] = dateStamp.split(' ')

  this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
  })

	return this
}


let hoursWorkedOnDate = function(soughtDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
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