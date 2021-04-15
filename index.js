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

function createEmployeeRecord(array){
    // return {
    //     firstName: this[0],
    //     familyName: this[1],
    //     title: this[2],
    //     payPerHour: this[3],
    //     timeInEvents: [],
    //     timeOutEvents: []
    // }
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

}

function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(dateTimeStamp){
    const splitStamp = dateTimeStamp.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(splitStamp[1]),
        date: splitStamp[0]
    })
    return this
}

function createTimeOutEvent(dateTimeStamp){
    const splitStamp = dateTimeStamp.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(splitStamp[1]),
        date: splitStamp[0]
    })
    return this
}

function hoursWorkedOnDate(dateStamp){

    // function findDate(){
    //     this.find(time => time.date === dateStamp).hour
    // }
    // const timeIn = findDate.apply(this.timeInEvents)
    // const timeOut = findDate.apply(this.timeOutEvents)

    // const timeIn = this.timeInEvents.findDate()
    // const timeOut = this.timeOutEvents.findDate()

    const timeIn = this.timeInEvents.find(time => time.date === dateStamp).hour
    const timeOut = this.timeOutEvents.find(time => time.date === dateStamp).hour

    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(dateStamp){
    return this.payPerHour * hoursWorkedOnDate.call(this, dateStamp)
}

// function payrollExpense(){
   
// }

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(item => item.firstName == firstName)
}

function calculatePayroll(array){
    return array.reduce((memo, i) =>
        {return memo + allWagesFor.call(i)}, 0)
}

