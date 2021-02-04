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

function createEmployeeRecord(employeeRecord) {
    const employeeInfo = {
        firstName: employeeRecord[0],
        familyName: employeeRecord[1],
        title: employeeRecord[2],
        payPerHour: employeeRecord[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeInfo
} 

function createEmployeeRecords(newRecord) {
    return newRecord.map(createEmployeeRecord)
}

function createTimeInEvent(dateTime) {

    const employeeTimeIn = {
        type: "TimeIn",
        hour: parseInt(dateTime.split(' ')[1]),
        date: dateTime.split(' ')[0]
    }

    this.timeInEvents.push(employeeTimeIn)
    return this

}

function createTimeOutEvent(dateTime) {

    const employeeTimeOut = {
        type: "TimeOut",
        hour: parseInt(dateTime.split(' ')[1]),
        date: dateTime.split(' ')[0]
    }

    this.timeOutEvents.push(employeeTimeOut)
    return this

}

function hoursWorkedOnDate(dateTime) {
    let punchInHour = this.timeInEvents.find(n => {
        return n.date === dateTime
    })
    let punchOutHour = this.timeOutEvents.find(n => {
        return n.date === dateTime
    })
    let workHours = punchOutHour.hour - punchInHour.hour
    return workHours / 100
}

function wagesEarnedOnDate(dateTime) {
    let wagesEarned = hoursWorkedOnDate.call(this, dateTime) * this.payPerHour
    return wagesEarned
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function (employee) {
        return employee.firstName === firstName
    })
}

function calculatePayroll(employees) {
    // let payroll = 0
    // for (const employee in employees) {
    //     console.log(employees)
    //     payroll = allWagesFor.call(employee) + payroll;
    // }

    return employees.reduce(function(payOwed, employee){
        return payOwed + allWagesFor.call(employee)
    }, 0)

}