/* Your Code Here */

function createEmployeeRecord(testEmployee){

    let createdEmployee = {}
    let employeeFields = ['firstName', 'familyName', 'title', 'payPerHour']

    employeeFields.map(function(employeeField, value){
        createdEmployee[employeeField] = testEmployee[value]
    });   

    createdEmployee['timeInEvents'] = []
    createdEmployee['timeOutEvents'] = []

    return createdEmployee

}


function createEmployeeRecords(employeeArrays){
    let employeeRecords = [];
    employeeArrays.map(function(employeeArray){
        employeeRecords.push(createEmployeeRecord(employeeArray))
    });

    return employeeRecords
}


function createTimeEvent(timeDateStamp, event){

    let timeEventObject = {}
    let timeEventFields = ['date', 'hour']
    let timeDateStampArray = timeDateStamp.split(" ")

    timeEventFields.map(function(timeEventField, value){
        if (timeEventField === 'hour'){
            timeEventObject[timeEventField] = parseInt(timeDateStampArray[value])
        } else {
            timeEventObject[timeEventField] = timeDateStampArray[value]
        }
    });       

    if (event === "Out"){
        timeEventObject['type'] ="TimeOut"
    }

    else if (event === "In"){
        timeEventObject['type'] ="TimeIn"
    }

    return timeEventObject
}


function createTimeInEvent(timeInDateStamp){
    let timeInObject = createTimeEvent(timeInDateStamp, "In")

    this.timeInEvents.push(timeInObject)
    
    return this
}


function createTimeOutEvent(timeOutDateStamp){
    let timeOutObject = createTimeEvent(timeOutDateStamp, "Out")

    this.timeOutEvents.push(timeOutObject)
    
    return this
}


function hoursWorkedOnDate(timeEventDate){

    const timeInFound = this.timeInEvents.find(element => element.date === timeEventDate)
    const timeOutFound = this.timeOutEvents.find(element => element.date === timeEventDate)

    const hoursWorked = (timeOutFound.hour / 100) - (timeInFound.hour / 100)
    
    return hoursWorked

}    


function wagesEarnedOnDate(timeEventDate){

    const hoursWorked = hoursWorkedOnDate.call(this, timeEventDate)
    const wagesEarned = hoursWorked * this.payPerHour

    return wagesEarned

}


function calculatePayroll(employees){
    let grandTotalOwed = employees.reduce((m, e) => m + allWagesFor.call(e), 0)

    return grandTotalOwed
}


function findEmployeeByFirstName(employees, firstName){
    const foundEmployee = employees.find(employee => employee.firstName == firstName)

    return foundEmployee
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