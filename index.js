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
    
    let emp = {}

    emp.firstName = arr[0]
    emp.familyName = arr[1]
    emp.title = arr[2]
    emp.payPerHour = arr[3]
    emp.timeInEvents = []
    emp.timeOutEvents = []

    return emp 

}

function createEmployeeRecords(arr){
   return arr.map(ele => createEmployeeRecord(ele))
}

function createTimeInEvent(date){

    let dateBreakDown = date.split(" ")

    let day = dateBreakDown[0]
    let hr = dateBreakDown[1]
    
    let timeStamp = {
        type : "TimeIn",
        hour : parseInt(hr),
        date : day
    }

    this.timeInEvents.push(timeStamp)
    return this 
}

function createTimeOutEvent(date){
    
    let dateBreakDown = date.split(" ")

    let day = dateBreakDown[0]
    let hr = dateBreakDown[1]
    
    let timeStamp = {
        type : "TimeOut",
        hour : parseInt(hr),
        date : day
    }

    this.timeOutEvents.push(timeStamp)
    return this 
}

function hoursWorkedOnDate(date){
    let inTime = this.timeInEvents.find(e => e.date === date)
    let outTime = this.timeOutEvents.find(e => e.date === date)

    let hrsWorked = (outTime.hour - inTime.hour) / 100 

    return hrsWorked
}

function wagesEarnedOnDate(date){
    let getHours = hoursWorkedOnDate.call(this, date)
    return getHours * this.payPerHour
}

function calculatePayroll(arr){

        return arr.reduce(function(total, date){
            
            let collect = allWagesFor.call(date)

            return total + collect
         },0)
}    


function findEmployeeByFirstName(arr, name){
    return arr.find(emp => emp.firstName === name)
}

