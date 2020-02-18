
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


/// create invidual empolyee record 
let createEmployeeRecord = function(record){
    return {
        firstName: record[0], familyName: record[1],  title: record [2], payPerHour: record [3],  timeInEvents: [],  timeOutEvents: []
    }
}  

/// // // Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array

let createEmployeeRecords = function(allRecords){
    return allRecords.map(function(record){
        return createEmployeeRecord(record) 
    })
} 

////// // Loads Array elements into corresponding Object properties. Additionally, initialize empty Arrays on the properties timeInEvents and timeOutEvents.

let createTimeInEvent = function(timeIn){
   let [date,hour] = timeIn.split(' ')
   
   this.timeInEvents.push({
//this record
       type: "TimeIn",
       hour: parseInt(hour,10),
       date,
   })
   return this 
}


let createTimeOutEvent = function(timeOut){
    let [date,hour] = timeOut.split(' ')
    
    this.timeOutEvents.push({
 //this record
        type: "TimeOut",
        hour: parseInt(hour,10), 
        date,
    })
    return this 
 }


 let hoursWorkedOnDate = function(workDate){
    let hourIn = this.timeInEvents.find(function(e){
        return e.date === workDate
    })

    let hourOut = this.timeOutEvents.find(function(e){
        return e.date === workDate
    })

    return (hourOut.hour - hourIn.hour) / 100
}


let wagesEarnedOnDate = function(workDate){
    let rawWage = hoursWorkedOnDate.call(this, workDate)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}

// ///Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.


// let findEmployeebyFirstName = function(srcArray, firstName) {
//   return srcArray.find(function(rec){
//     return rec.firstName === firstName
//   })
// }

// let calculatePayroll = function(arrayOfEmployeeRecords){
//     return arrayOfEmployeeRecords.reduce(function(memo, rec){
//         return memo + allWagesFor.call(rec)
//     }, 0)
// }


