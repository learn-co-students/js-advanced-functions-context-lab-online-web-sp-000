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

function createEmployeeRecord(empArr) {
    return {
        firstName: empArr[0],
        familyName: empArr[1],
        title: empArr[2],
        payPerHour: empArr[3],
        timeInEvents: [], 
        timeOutEvents: []
    }
}

function createEmployeeRecords(empArrs) {
    return empArrs.map(empArr => createEmployeeRecord(empArr)); 
}

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' '); 
    const timeInEvent = {
        type: 'TimeIn',
        hour: parseInt(hour),
        date
    }
    this.timeInEvents.push(timeInEvent);
    return this; 
}

function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' '); 
    const timeOutEvent = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date
    }
    this.timeOutEvents.push(timeOutEvent);
    return this; 
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date).hour; 
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour; 
    return (timeOut - timeIn) / 100; 
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour; 
}

function allWagesFor() {
    const dates = this.timeInEvents.map(event => event.date); 
    return dates.reduce((total, date) => total + this.wagesEarnedOnDate(date), 0); 
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(emp => emp.firstName === firstName); 
}

function calculatePayroll(empArr) {
    return empArr.reduce((total, empObj) => total + allWagesFor.call(empObj), 0); 
}