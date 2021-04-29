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

function createEmployeeRecord(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(empArr){
    return empArr.map(x => createEmployeeRecord(x))
}

function createTimeInEvent(timeStr){
    let event = {type: "TimeIn", hour: parseInt(timeStr.split(" ")[1], 10), date: timeStr.split(" ")[0]}
    this.timeInEvents.push(event)
    return this
}

function createTimeOutEvent(timeStr){
    let event = {type: "TimeOut", hour: parseInt(timeStr.split(" ")[1], 10), date: timeStr.split(" ")[0]}
    this.timeOutEvents.push(event)
    return this
}

function hoursWorkedOnDate(dateStr){
    let dateObjIn = this.timeInEvents.find(x => x.date == dateStr)
    let dateObjOut = this.timeOutEvents.find(x => x.date == dateStr)
    return ((dateObjOut.hour - dateObjIn.hour) / 100)

}

function wagesEarnedOnDate(dateStr){
    let hours = hoursWorkedOnDate.call(this, dateStr)
    return hours * this.payPerHour
}

function allWagesFor(){
    let total = 0
    let len = this.timeInEvents.length
    for (let i = 0; i < len; i++ ){
        if (hoursWorkedOnDate.call(this, this.timeInEvents[i].date) != undefined){
            total += wagesEarnedOnDate.call(this, this.timeInEvents[i].date)
        }
    }
    return total
}

function calculatePayroll(arr){
    console.log(arr[1])
    let pays = arr.map(x => allWagesFor.call(x)) 
    return pays.reduce( (total, ele) => total += ele, 0)
}

function findEmployeeByFirstName(recordsArr, name){
   return recordsArr.find(x => x.firstName == name)
}