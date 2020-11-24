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

function createEmployeeRecord(employeeArray){
    return{
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRecords){
    return employeeRecords.map(employee => createEmployeeRecord(employee));
}

let createTimeInEvent = function(date){
    const dateArray = date.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateArray[1], 10),
        date: dateArray[0]
    })
    return this;
}

let createTimeOutEvent = function(date){
    const dateArray = date.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateArray[1], 10),
        date: dateArray[0]
    })
    return this;
}

let hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(events => events.date == date);
    let timeOut = this.timeOutEvents.find(events => events.date == date);
    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(date){
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour)
}

let findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find(record => record.firstName == firstName)
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}




