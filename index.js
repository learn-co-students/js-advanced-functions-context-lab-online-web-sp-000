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

let createEmployeeRecord = function(record){
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(empData){
   return empData.map(arr => createEmployeeRecord(arr))
}

let createTimeInEvent = function(dateStr){
    let [date, hour] = dateStr.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
let createTimeOutEvent = function(dateStr){
    let [date, hour] = dateStr.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

let hoursWorkedOnDate = function(dateStr){
    let timeIn = this.timeInEvents.find( e => e.date === dateStr)
    let timeOut = this.timeOutEvents.find( e => e.date === dateStr)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(dateStr){
    let wage =  hoursWorkedOnDate.call(this,dateStr) * this.payPerHour
    return parseFloat(wage.toString())
}

function allWagesFor(){
    //get all dates for employee
    let allDates = this.timeInEvents.map( e => {return e.date})
    console.log(allDates.length)
    return allDates.reduce((acc, d) => acc+wagesEarnedOnDate(this,d),0)
}

function findEmployeeByFirstName(srcArray, firstname){
    return srcArray.find( emp => emp.firstName === firstname)
}

function calculatePayroll(srcArray){
    return srcArray.reduce((acc, emp)=> acc+allWagesFor.call(emp),0) 
}