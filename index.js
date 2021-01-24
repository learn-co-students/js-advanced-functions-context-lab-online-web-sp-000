/* Your Code Here */
let createEmployeeRecord = array => { 
    return  {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3], 
    timeInEvents: [],
    timeOutEvents: []
    }
}

let createEmployeeRecords = array => {
    return array.map(employee => { 
        return createEmployeeRecord(employee)
    })
}

let createTimeInEvent = function(dateTime) { 
    let [date, hour] = dateTime.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}   

let createTimeOutEvent = function(dateTime) { 
    let [date, hour] = dateTime.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}   

let hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date).hour;
    let timeOut = this.timeOutEvents.find(event => event.date === date).hour; 
    return (timeOut - timeIn) / 100; 
}

let wagesEarnedOnDate = function(date) {
    let hours = hoursWorkedOnDate.call(this, date); 
    return hours * this.payPerHour;
}

let findEmployeeByFirstName = (array, firstName) => { 
    return array.find(employee => employee.firstName === firstName)
}

let calculatePayroll = array => { 
    let wages = array.map(employees => allWagesFor.call(employees)); 
    return wages.reduce(function(accumulator, currentEmployeeWage) {
        return accumulator + currentEmployeeWage
    } ,0);
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