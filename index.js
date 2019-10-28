/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



function createEmployeeRecord(element) {
    //return the pupulated object with it's keys and values 
    return {
        firstName: element[0],
        familyName: element[1],
        title: element[2],
        payPerHour: element[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function (employeeData) {
    //create two records
    return employeeData.map(function (element) {
        return createEmployeeRecord(element)
    })
}
//define createTimeInEvent
//takes in the object dateStamp
let createTimeInEvent = function (dateStamp) {
    //update the object
    let [date, hour] = dateStamp.split(' ')
    //add keys to the object
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    //return the context this
    return this
}
//same as above, update type key with "TimeOut" value
let createTimeOutEvent = function (dateStamp) {
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let hoursWorkedOnDate = function (formDate) {
    //let inEvent equal timeInEvents context
    //find results of timeInEvents
    let inEvent = this.timeInEvents.find(function (obj) {
        //return result of obj date is equal to form date
        return obj.date === formDate
    })

    let outEvent = this.timeOutEvents.find(function (obj) {
        return obj.date === formDate
    })
    //r4eturn outEvent - inEvent divided by 100 
    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function (formDate) {
    //let amountOwed equal the ineheritance this and formDate
    let amountOwed = hoursWorkedOnDate.call(this, formDate)
        * this.payPerHour
        //return amountOwed as a string 
    return parseFloat(amountOwed.toString())
}

let allWagesFor = function () {
    // inherit timeInEvents context and nonmutate timeInEvents to equal the variable eligibleDates
    let eligibleDates = this.timeInEvents.map(function (obj) {
        //return the obj date 
        return obj.date
    })
    //reduce
    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}
//let findEmployeeByFirstName equal a funtion with that has two inputs
let findEmployeeByFirstName = function (srcArray, firstName) {
    //find employee in src array 
    return srcArray.find(function (recover) {
        //return employee by first name 
        return recover.firstName === firstName
    })
}

// let findEmployeeByFirstName = function (collection, firstNameString) {
//     //create two records
//     return employeeData.map(function (element) {
//         return createEmployeeRecord(element)
//     })
// }

let calculatePayroll = function (arrayOfEmployeeRecords) {
    return arrayOfEmployeeRecords.reduce(function (memo, rec) {
        return memo + allWagesFor.call(rec)
    }, 0)
}


