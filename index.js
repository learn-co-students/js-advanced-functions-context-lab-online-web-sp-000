let createEmployeeRecord = function(row) {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(arr) {
    return arr.map(obj => createEmployeeRecord(obj))
}

let createTimeInEvent =  function(date) {
    let [day, hour] = date.split(" ");
    hour = parseInt(hour);
    this.timeInEvents.push({
        type: "TimeIn",
        hour: hour,
        date: day
    });

    return this 
}

let createTimeOutEvent =  function(date) {
    let [day, hour] = date.split(" ");
    hour = parseInt(hour);
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: hour,
        date: day
    });

    return this 
}

let hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date)
    let timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
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

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
let findEmployeeByFirstName = function(employees, name) {
    return employees.find(employee => employee.firstName === name);
}