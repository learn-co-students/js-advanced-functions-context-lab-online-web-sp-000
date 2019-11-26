/* Your Code Here */

function createEmployeeRecord(array){
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

function createEmployeeRecords(arrays){
    let objs = arrays.map( function(array){
        return createEmployeeRecord(array)
    })
    return objs
}

function createTimeInEvent(dateStamp){
    let tIObj = {
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, -5)
    }
    this.timeInEvents.push(tIObj)
    return this
    //return tIObj
}

function createTimeOutEvent(dateStamp){
    let tOObj = {
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, -5)
    }
    this.timeOutEvents.push(tOObj)
    return this
}

function hoursWorkedOnDate(date){
    let timeInDate = this.timeInEvents.find(el => el.date === date);
    let timeOutDate = this.timeOutEvents.find(el => el.date === date);
    let hours = timeOutDate.hour - timeInDate.hour
    
    
    return parseInt(hours/100)
    //console.log(hours)
}

function wagesEarnedOnDate(date){
    let h = hoursWorkedOnDate.call(this, date)
    //let w = this.payPerhour// * h
    return this.payPerHour * h
}

function findEmployeeByFirstName(srcarray, name){
    let record = srcarray.find( a => a.firstName === name)
    return record
}

function calculatePayroll(arrayOfRecords){
    return arrayOfRecords.reduce( function(memo, record){
        return memo + allWagesFor.call(record)
        
        
    
    }, 0)
    
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