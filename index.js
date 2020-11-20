/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

function createEmployeeRecords(employeeArray) {
    return employeeArray.map(createEmployeeRecord);
};

function createTimeEvent(time, kind) {
    let timeArray = time.split(' ');
    let timeRecord = {
        type: kind,
        date: timeArray[0],
        hour: parseInt(timeArray[1])
    };
    if (kind === "TimeIn") {
        this.timeInEvents.push(timeRecord);
    } else if (kind === "TimeOut") {
        this.timeOutEvents.push(timeRecord);
    };
    return this;
};

function createTimeInEvent(time) {
    return createTimeEvent.call(this, time, "TimeIn");
};

function createTimeOutEvent(time) {
    return createTimeEvent.call(this, time, "TimeOut");
};

function hoursWorkedOnDate(date) {
    function timeEvent(record) {return record.date === date};
    let timeIn = this.timeInEvents.find(timeEvent).hour;
    let timeOut = this.timeOutEvents.find(timeEvent).hour;
    return (timeOut - timeIn) / 100;
};

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(employeeArray) {
    return employeeArray.reduce(function(wages, employee) {
        return wages + allWagesFor.call(employee);
    }, 0);
};

function findEmployeeByFirstName(employees, name) {
    return employees.find(function(employee) {return employee.firstName === name});
};