/* Your Code Here */
function createEmployeeRecord(recordArray) {
    const [firstName, familyName, title, payRate] = recordArray
    return {
       firstName: firstName,
       familyName: familyName,
       title: title,
       payPerHour: payRate,
       timeInEvents: [],
       timeOutEvents: []
    }
 }

 function createEmployeeRecords(nestedArray){
    return nestedArray.map(createEmployeeRecord)
}

function createTimeInEvent(timeStamp){
    const timeArray = timeStamp.split(" ")
    const hour = parseInt(timeArray[1])
    const date = timeArray[0]
    const newTimeInObj = {
        type: "TimeIn",
        hour: hour,
        date: date
     }
     this.timeInEvents.push(newTimeInObj)
    return this
}

function createTimeOutEvent(timeStamp){
    const timeArray = timeStamp.split(" ")
    const hour = parseInt(timeArray[1])
    const date = timeArray[0]
    const newTimeInObj = {
        type: "TimeOut",
        hour: hour,
        date: date
     }
     this.timeOutEvents.push(newTimeInObj)
    return this
}
function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(timeIn => timeIn.date === date)
    const timeOut = this.timeOutEvents.find(timeOut => timeOut.date === date)

    const hoursWorked = (timeOut.hour - timeIn.hour) / 100
   return hoursWorked

}

function wagesEarnedOnDate(date){
    const hoursWorked = hoursWorkedOnDate.call(this, date)
   const payRate = this.payPerHour

   const payForDate = hoursWorked * payRate
   return payForDate

   
}

function calculatePayroll(record){
    const allEmpWages = record.map(empObj => allWagesFor.call(empObj))
    let allEmpWagesTotal = allEmpWages.reduce((empWage, value) => value + empWage, 0)
    return allEmpWagesTotal

    


}

function findEmployeeByFirstName(record, name){
    return record.find(record => record.firstName === name)


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