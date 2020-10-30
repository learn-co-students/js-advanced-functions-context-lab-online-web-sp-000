function createEmployeeRecord(row) {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
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

function createEmployeeRecords(record) {
    return record.map(function(row){
        return createEmployeeRecord(row)
    })
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return this
}

function hoursWorkedOnDate(searchDate) {
    let clockIns = this.timeInEvents.find(function(e) {
        return e.date === searchDate
    })
    let clockOuts = this.timeOutEvents.find(function(e){
        return e.date === searchDate
    })

    return (clockOuts.hour - clockIns.hour) / 100
}

function wagesEarnedOnDate(searchDate) {
    let wage = hoursWorkedOnDate.call(this, searchDate) * this.payPerHour
    return parseFloat( wage.toString() )
}

function findEmployeeByFirstName(src, firstName) {
    return src.find(function(rec){
        return rec.firstName === firstName
    })
}

function calculatePayroll(employeeRecords){
    return employeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}