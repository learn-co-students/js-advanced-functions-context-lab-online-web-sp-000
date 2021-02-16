/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employeeData) {
    const employee = {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    };

    return employee
}

function createEmployeeRecords(arrofEmployeeData) {
    return arrofEmployeeData.map(e => createEmployeeRecord(e));
}

function createTimeInEvent(dateStamp) {
    const theDate = dateStamp.split(" ")[0]
    const theHour = parseInt(dateStamp.split(" ")[1])
    this.timeInEvents.push({
        type: "TimeIn",
        hour: theHour,
        date: theDate
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    const theDate = dateStamp.split(" ")[0]
    const theHour = parseInt(dateStamp.split(" ")[1])
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: theHour,
        date: theDate
    })
   return this
}

function hoursWorkedOnDate(dateStamp) {
    const timeIn = this.timeInEvents.find(event => event.date === dateStamp);
    const timeOut = this.timeOutEvents.find(event => event.date === dateStamp);
 
    if (timeIn && timeOut) {
        return (timeOut.hour - timeIn.hour)/100;
    };
   
}

function wagesEarnedOnDate(dateStamp) {
    return this.payPerHour * hoursWorkedOnDate.call(this, dateStamp)
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

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName ? employee : undefined)
}

function calculatePayroll(arr) {
    return arr.reduce((memo, employee) => {
        return memo + allWagesFor.call(employee)
    }, 0)
}