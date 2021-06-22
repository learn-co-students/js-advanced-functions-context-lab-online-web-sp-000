/* Your Code Here */

let createEmployeeRecord = function (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
};

let createEmployeeRecords = function (array) {
    return array.map(createEmployeeRecord)
}




let createTimeInEvent = function (getDate) {
    this.timeInEvents.push(createDateFormat('TimeIn', getDate))
    return this
}

let createDateFormat = function (getType, getDate) {
    return {type: getType, date: getDate.slice(0, 10), hour: parseInt(getDate.slice(-4)), }
}

let createTimeOutEvent = function (getDate) {
    this.timeOutEvents.push(createDateFormat('TimeOut', getDate))
    return this
}

let hoursWorkedOnDate = function(getDate) {
    let timeIn = this.timeInEvents.find(function(event){
        return  event.date === getDate
    });

    let timeOut = this.timeOutEvents.find(function(event){
    return event.date === getDate
    });
    
    return (timeOut.hour - timeIn.hour)/100
}



let wagesEarnedOnDate = function (getDate) {
    let wages = hoursWorkedOnDate.call(this, getDate)
    let rate = this.payPerHour
    let payable = wages * rate
    return payable
}


let findEmployeeByFirstName = function (srcArray, providedName) {
    return srcArray.find(function(name){
        return name.firstName === providedName
    })
}


let calculatePayroll = function (records){
return records.reduce(function(acc, cv){
    return acc + allWagesFor.call(cv)}, 0)
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