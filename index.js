/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(array) {
    let obj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
}

function createEmployeeRecords(arrayOfArrays) {
    let arrayOfObjects = []
    arrayOfArrays.forEach(element => {
        arrayOfObjects.push(createEmployeeRecord(element))
    })
    return arrayOfObjects
}

function createTimeInEvent(timeStamp) {
    let hour = parseInt(timeStamp.split(' ')[1])
    let date = timeStamp.split(' ')[0]
    this.timeInEvents.push({type: "TimeIn", hour: hour, date: date})
    return this
}

function createTimeOutEvent(timeStamp) {
    let hour = parseInt(timeStamp.split(' ')[1])
    let date = timeStamp.split(' ')[0]
    this.timeOutEvents.push({type: "TimeOut", hour: hour, date: date})
    return this
}

function hoursWorkedOnDate(timeStamp) {
    let timeIn = this.timeInEvents.find(x => x.date === timeStamp)
    let timeOut = this.timeOutEvents.find(x => x.date === timeStamp)
    let timePut = (timeOut.hour - timeIn.hour) / 100
    return timePut
}

function wagesEarnedOnDate(timeStamp) {
    return hoursWorkedOnDate.call(this, timeStamp) * this.payPerHour
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

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(x => {return x.firstName === firstName})
}

function calculatePayroll(array){
    return array.reduce((num, sum) => num + allWagesFor.call(sum), 0)
}