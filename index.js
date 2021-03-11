/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(infoArray){
    let infoObject = {
        firstName: infoArray[0],
        familyName: infoArray[1], 
        title: infoArray[2], 
        payPerHour: infoArray[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return infoObject
}

function createEmployeeRecords(employees){
    let employeeRecords = employees.map(employee => createEmployeeRecord(employee))
    return employeeRecords
}

function createTimeInEvent(timeStamp){
    let hour = parseInt(timeStamp.substring(11,15))
    let date = timeStamp.substring(0,10)

    this.timeInEvents.push( {type: "TimeIn", hour: hour, date: date })

    return this

}

function createTimeOutEvent(timeStamp){
    let hour = parseInt(timeStamp.substring(11,15))
    let date = timeStamp.substring(0,10)

    this.timeOutEvents.push( {type: "TimeOut", hour: hour, date: date })

    return this
}

function hoursWorkedOnDate(date){
    let hourIn = this.timeInEvents.find(n => n.date === date).hour
    let hourOut = this.timeOutEvents.find(n => n.date === date).hour
    return (hourOut - hourIn)/100

}

function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    let wages = this.payPerHour * hoursWorked

    return wages
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

function calculatePayroll(employees){
    
    return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0)
    
}

function findEmployeeByFirstName(srcArray, firstName){
    let employee

    srcArray.filter(n =>{
        if (n.firstName === firstName){
            employee = n
        }
    })

    return employee
}



