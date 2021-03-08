/* Your Code Here */
let createEmployeeRecord = function (array) {
    // Argument(s)
    // A 4-element Array of a String, String, String, and Number corresponding to a first name, family name, title, and pay rate per hour
    // Returns
    // JavaScript Object with keys:
    // firstName
    // familyName
    // title
    // payPerHour
    // timeInEvents
    // timeOutEvents
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    // Behavior
    // Loads Array elements into corresponding Object properties. Additionally, initialize empty Arrays on the properties timeInEvents and timeOutEvents.
}

let createEmployeeRecords = function (array) {
    // Argument(s)
    // Array of Arrays
    // Returns
    // Array of Objects
    return array.map(function (record) {
        return createEmployeeRecord(record)
    })
    // Behavior
    // Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array
}

let createTimeInEvent = function (dateStamp) {
    // Argument(s)
    // A date stamp ("YYYY-MM-DD HHMM"), where time is expressed in 24-hour standard
    // Returns
    // The record that was just updated
    let [date, hour] = dateStamp.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour, 10)
    })
    return this
    // Behavior
    // Add an Object with keys:
    // type: Set to "TimeIn"
    // hour: Derived from the argument
    // date: Derived from the argument
}

let createTimeOutEvent = function (dateStamp) {
    // Argument(s)
    // A date stamp ("YYYY-MM-DD HHMM"), where time is expressed in 24-hour standard
    // Returns
    // The record that was just updated
    let [date, hour] = dateStamp.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(hour, 10)
    })
    return this
    // Behavior
    // Add an Object with keys:
    // type: Set to "TimeOut"
    // hour: Derived from the argument
    // date: Derived from the argument
}

let hoursWorkedOnDate = function (dateStamp) {
    // Argument(s)
    // A date of the form "YYYY-MM-DD"
    // Returns
    // Hours worked, an Integer
    let checkIn = this.timeInEvents.find(element => element.date === dateStamp)
    let checkOut = this.timeOutEvents.find(element => element.date === dateStamp)
    return (checkOut.hour - checkIn.hour) / 100
    // Behavior
    // Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
}

let wagesEarnedOnDate = function (dateStamp) {
    // Argument(s)
    // A date of the form "YYYY-MM-DD"
    // Returns
    // Pay owed
    let hours = hoursWorkedOnDate.call(this, dateStamp)
    return this.payPerHour * hours
    // Behavior
    // Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(element => element.date)

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let findEmployeeByFirstName = function (srcArray, firstName) {
    // Argument(s)
    // srcArray: Array of employee records
    // firstName: String representing a first name held in an employee record
    // Returns
    // Matching record or undefined
    return srcArray.find(employee => employee.firstName === firstName)
    // Behavior
    // Test the firstName field for a match with the firstName argument
}

let calculatePayroll = function (array) {
    // Argument(s)
    // Array of employee records
    // Returns
    // Pay owed for all dates
    return array.reduce((memo, record) => {
        return memo + allWagesFor.call(record)
    }, 0)
    // Behavior
    // Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.
}