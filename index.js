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

let createEmployeeRecord = function(row) {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

let createEmployeeRecords = function(employeeRow) {
    return employeeRow.map(function(row){
        return createEmployeeRecord(row)
    })
};

let createTimeInEvent = function(stamp) {
    let [date, hour] = stamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date    
    })
    return this;
};

let createTimeOutEvent = function(stamp) {
    let [date, hour] = stamp.split(' ')
    this.timeInEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date    
    })
    return this;
};

let hoursWorkedOnDate = function(onDate) {
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === onDate
    });
    let outEvent = object.timeOutEvents.find(function(e){
        return e.date === onDate
    });
    return (outEvent.hour - inEvent.hour)/100;
};

let wagesEarnedOnDate = function(onDate) {
    let wage = hoursWorkedOnDate.call(this, onDate) * this.payPerHour;
    return parseFloat(wage.toString())
};


let findEmployeeByFirstName = function(array, firstName) {
    return array.find(function(employee){
        return employee.firstName === firstName);
    }
};

let calculatePayroll = function(array) {
    return array.reduce(function(accumulator, employee) {
        return accumulator + allWagesFor.call(employee);
    }, 0);
};