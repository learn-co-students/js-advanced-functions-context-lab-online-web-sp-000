/* Your Code Here */
function createEmployeeRecord(array){
    const r = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return r
}

function createEmployeeRecords(arrays){
   return arrays.map(array=> createEmployeeRecord(array))
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(" ")
    const timeInEvent = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(timeInEvent)
    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(" ")
    const timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(t=>t.date === date).hour
    const timeOut = this.timeOutEvents.find(t=>t.date === date).hour
    return (timeOut- timeIn)/100
}

function wagesEarnedOnDate(date){
    const hour = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hour
}


function findEmployeeByFirstName(scrArray, firstName){
    return scrArray.find(a=>a.firstName === firstName)
}

function calculatePayroll(emprecords){
    const allWages = []
    emprecords.map(empRecord=>allWages.push(allWagesFor.call(empRecord)))
    return allWages.reduce((accumulator, currentValue)=>accumulator + currentValue)
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

// let calculatePayroll = function(arrayOfEmployeeRecords){
//     return arrayOfEmployeeRecords.reduce(function(memo, rec){
//         return memo + allWagesFor.call(rec)
//     }, 0)
// }
