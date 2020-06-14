// Your code here
function createEmployeeRecord(array){
    let object = {}
    object.firstName =array[0]
    object.familyName = array[1]
    object.title = array[2]
    object.payPerHour = array[3]
    object.timeInEvents = []
    object.timeOutEvents = []
    return object
}

function createEmployeeRecords(array) {
    let records = array.map(element => createEmployeeRecord(element))
    return records
}

function createTimeInEvent (time){
    let [datetime, hourtime] = time.split(" ");
    this.timeInEvents.push({type:"TimeIn", hour:parseInt(hourtime), date:datetime})
    return this
}

function createTimeOutEvent (time){
    let [datetime, hourtime] = time.split(" ");
    this.timeOutEvents.push({type:"TimeOut", hour:parseInt(hourtime), date:datetime})
    return this
}

function hoursWorkedOnDate (time){
    let timeIn = this.timeInEvents.find(function(e){
        return e.date === time
    })
    let timeOut = this.timeOutEvents.find(function(e){
        return e.date === time
    })  
    return (timeOut.hour - timeIn.hour)/100
}
function wagesEarnedOnDate (time){ //broken
    let hours = hoursWorkedOnDate.call(this, time)
    return hours * this.payPerHour
}


function findEmployeeByFirstName (array, name) {
    return array.find(obj => obj.firstName.toUpperCase() == name.toUpperCase())
}

function calculatePayroll (array){
    return array.reduce(function(total, record){
        return total + allWagesFor.call(record)
    }, 0)
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