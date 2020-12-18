const createEmployeeRecord = (recordArray => {
    return {
        firstName: recordArray[0],
        familyName: recordArray[1],
        title:  recordArray[2],
        payPerHour: recordArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
})

const createEmployeeRecords = (recordsArray => {
    return recordsArray.map(record => {
        return createEmployeeRecord(record)
    })
})

const createTimeInEvent = (function(dateStamp) {
    let [date, hour] = dateStamp.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
})

const createTimeOutEvent = (function(dateStamp) {
    let [date, hour] = dateStamp.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
})

const hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(timeInEvent => {
        return timeInEvent.date === date
    })
    let timeOut = this.timeOutEvents.find(timeOutEvent => {
        return timeOutEvent.date === date
    })
    return (timeOut.hour - timeIn.hour)/100
}

const wagesEarnedOnDate = function(date) {
    let hours = hoursWorkedOnDate.call(this, date)

    return hours * this.payPerHour
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

const findEmployeeByFirstName = ((records, firstName) => {
    return records.find(record => record.firstName === firstName)
})

const calculatePayroll = function(employeeRecords){
    return employeeRecords.reduce(function(accumulator, employee) {
        return accumulator + allWagesFor.call(employee)
    }, 0)
}


