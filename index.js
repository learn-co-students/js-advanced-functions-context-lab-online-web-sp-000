/* Your Code Here */
function createEmployeeRecord (array) {
    let record =  {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
    return record
}

function createEmployeeRecords (array) {
    return array.map(function (e) {
        return createEmployeeRecord (e)
    })
}

function createTimeInEvent (dateStamp) {
    let hour = dateStamp.split(" ")[1]
    let d = {
        type: "TimeIn",
        date: dateStamp.split(" ")[0],
        hour: parseInt(hour),
    }
    this.timeInEvents.push(d)
    return this

}

function createTimeOutEvent (dateStamp) {
    let hour = dateStamp.split(" ")[1]
    let d = {
        type: "TimeOut",
        date: dateStamp.split(" ")[0],
        hour: parseInt(hour),
    }
    this.timeOutEvents.push(d)
    return this
}
let hoursWorkedOnDate = function (date) {
    let hourIn = this.timeInEvents.find((event) => event.date === date).hour
    let hourOut = this.timeOutEvents.find((event) => event.date === date).hour
    let worked = (hourOut - hourIn) / 100
    return worked
  }

function wagesEarnedOnDate (date) {
    let hours = hoursWorkedOnDate.call(this, date)
    let wage = this.payPerHour
    return hours * wage
}

function findEmployeeByFirstName (srcArray, firstName){
    return srcArray.find(function (e){
        return e.firstName === firstName
    })
}

function calculatePayroll (records){
    let total = records.reduce(function (memo, record) {
        return memo + allWagesFor.call(record)
    }, 0)
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