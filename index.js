let createEmployeeRecord = function(array) {
    return {
       firstName: array[0],
       familyName: array[1],
       title: array[2],
       payPerHour: array[3],
       timeInEvents: [],
       timeOutEvents: []
    }
}

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(arrayObj => {
        return createEmployeeRecord(arrayObj)
    })
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })  
    return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

function hoursWorkedOnDate(dateWorked){
    let timeIn = this.timeInEvents.find(dayWorked => {return dayWorked.date === dateWorked});
    let timeOut = this.timeOutEvents.find(dayWorked => {return dayWorked.date === dateWorked});
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(dateWorked) {
    let hoursWorked = hoursWorkedOnDate.call(this, dateWorked)
    return hoursWorked * this.payPerHour
}

let allWagesFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })
    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)
    return payable
}

function findEmployeeByFirstName(scrArray, employeeName) {
    return scrArray.find(name => name.firstName === employeeName)
}


function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((employee, records) => {
        return employee + allWagesFor.call(records)
    }, 0)
}