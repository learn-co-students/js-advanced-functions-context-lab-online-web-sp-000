/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// createEmployeeRecord
// 2) populates a firstName field from the 0 th element
// 3) populates a familyName field from the 1 th element
// 4) populates a title field from the 2 th element
// 5) populates a payPerHour field from the 3 th element
// 6) initializes a field, timeInEvents, to hold an empty Array
// 7) initializes a field, timeOutEvents, to hold an empty Array
let createEmployeeRecord = function(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employees) {
    //  let employee = []
    //  for (let i = 0; i < employees.length; i++) {
    //      employee.push(createEmployeeRecord.call(this, employees[i]))
    //  }
    return employees.map((emp) => {
        return createEmployeeRecord.call(this, emp)
            //   return createEmployeeRecord(emp)
    })
}


let createTimeInEvent = function(dateStamp) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    })
    return this
}

let createTimeOutEvent = function(dateStamp) {
        this.timeOutEvents.push({
            type: "TimeOut",
            hour: Number(dateStamp.split(" ")[1]),
            date: dateStamp.split(" ")[0]
        })
        return this
    }
    // hoursWorkedOnDate
    // Argument(s)
    // A date of the form "YYYY-MM-DD"
    // Returns
    // Hours worked, an Integer
    // Behavior
    // Given a date, find the number of hours elapsed between that date 's timeInEvent and timeOutEvent
    // wagesEarnedOnDate
    // Argument(s)
    // A date of the form "YYYY-MM-DD"
    // Returns
    // Pay owed
    // Behavior
    // Using hoursWorkedOnDate, multiply the hours by the record 's payRate to determine amount owed. Amount should be returned as a number.

let allWagesFor = function() {
    let eligibleDates = this.timeInEvents.map(function(e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}