/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function() {
    let eligibleDates = this.timeInEvents.map(function(e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    let record = {}
    record.firstName = array[0]
    record.familyName = array[1]
    record.title = array[2]
    record.payPerHour = array[3]
    record.timeInEvents = []
    record.timeOutEvents = []
    return record
}

function createEmployeeRecords(twoRows) {
    let results = twoRows.map(array => createEmployeeRecord(array))
    return results
}

function createTimeInEvent(string) {
    let newevent = {}
    newevent.type = "TimeIn"
    newevent.date = string.split(" ")[0]
    newevent.hour = parseInt(string.split(" ")[1])
    this.timeInEvents.push(newevent)
    return this
}

function createTimeOutEvent(string) {
    let newevent = {}
    newevent.type = "TimeOut"
    newevent.date = string.split(" ")[0]
    newevent.hour = parseInt(string.split(" ")[1])
    this.timeOutEvents.push(newevent)
    return this
}

function hoursWorkedOnDate(date) {
    let incoming = this.timeInEvents.find(
        event => { return event.date === date });
    let outgoing = this.timeOutEvents.find(event => { return event.date === date });
    return (outgoing.hour - incoming.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function allWagesFor() {
    let dates = this.timeInEvents.map(event => { return event.date })
    let wages = dates.map(date => { return wagesEarnedOnDate(date) })

    let totalWages = wages.reduce(function(total, wage) {
        return total + wage
    })
    return totalWages
}

function calculatePayroll(records) {
    return records.reduce(function(total, record) {
        return total + allWagesFor.call(record)
    }, 0)
}

function findEmployeeByFirstName(records, name) {
    return records.find(record => {
        return record.firstName === name
    })
}