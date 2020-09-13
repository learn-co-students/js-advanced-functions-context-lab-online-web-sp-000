/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function(employeeArray) {
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeArrays) {
    return employeeArrays.map(function(row){
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(dateStamp) {
    let timeInEvent = {
        type: "TimeIn",
        hour: Number(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    };
    this.timeInEvents.push(timeInEvent);
    return this
}

let createTimeOutEvent = function(dateStamp) {
    let timeOutEvent = {
        type: "TimeOut",
        hour: Number(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0]
    };
    this.timeOutEvents.push(timeOutEvent);
    return this
}

let hoursWorkedOnDate = function(dateStamp) {
    const correctDateTimeIns = this.timeInEvents.filter(timeInEvent => timeInEvent.date === dateStamp);
    const correctDateTimeOuts = this.timeOutEvents.filter(timeOutEvent => timeOutEvent.date === dateStamp);  
    let hoursWorked = 0;
    let maxCallback = ( acc, cur ) => Math.max( acc.hour, cur.hour );
    let minCallback = ( acc, cur ) => Math.min( acc.hour, cur.hour );
    let latestTimeOut = correctDateTimeOuts.reduce( maxCallback );
    let earliestTimeIn = correctDateTimeIns.reduce( minCallback );
    if (latestTimeOut.hour) {
        hoursWorked += (latestTimeOut.hour - earliestTimeIn.hour);
    }
    else {
        hoursWorked += (latestTimeOut - earliestTimeIn);
    }
    return hoursWorked/100;
}

let wagesEarnedOnDate = function(dateStamp) {
    return hoursWorkedOnDate.call(this,dateStamp) * this.payPerHour;
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    let uniqEligibleDates = [...new Set(eligibleDates)];

    let payable = uniqEligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}

let findEmployeeByFirstName = function(employeeRecords, firstName) {
    return employeeRecords.find(employee => employee.firstName === firstName);
}

let calculatePayroll = function(employeeRecords) {
    let totalPayroll = 0;
    const reducer = (accumulator, currentValue) => accumulator + allWagesFor.call(currentValue);
    return employeeRecords.reduce(reducer,0)
}