/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(section){
    let record={
        firstName: section[0],
        familyName: section[1],
        title: section[2],
        payPerHour: section[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record
}

function createEmployeeRecords(array){
   let person = array.map(function(subarray){
      return createEmployeeRecord(subarray)})
        return person
    }

function createTimeInEvent(timeStamp){
    let time= timeStamp.split(" ")
    let dateIn = time[0]
    let timeIn = time[1]
    let timeArray={
        type:"TimeIn",
        hour: parseInt(timeIn, 10),
        date: dateIn
    }
   // console.log("THis is testingggggggggggggggggggggggggggg", this)
    this.timeInEvents.push(timeArray)
    return this
}


function createTimeOutEvent(timeStamp){
    let time= timeStamp.split(" ")
    let dateOut = time[0]
    let timeOut = time[1]
    let timeArray={
        type:"TimeOut",
        hour: parseInt(timeOut, 10),
        date: dateOut
    }
    this.timeOutEvents.push(timeArray)
    return this
}

function hoursWorkedOnDate(date){
    let dateIn = this.timeInEvents.find(function(e){
        return e.date==date
    })   
        let dateOut = this.timeOutEvents.find(function(e){
           return e.date===date
        })
            return (dateOut.hour-dateIn.hour)/100
}

function wagesEarnedOnDate(date){
    let wage= hoursWorkedOnDate.call(this, date) * this.payPerHour
    return wage
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


function findEmployeeByFirstName(array, firstName){
    return array.find(function(name){ 
       return name.firstName===firstName})
}

let calculatePayroll = function(array){
    return array.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

