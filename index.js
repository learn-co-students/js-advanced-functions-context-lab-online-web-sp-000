/* Your Code Here */

function createEmployeeRecord(arr){
    let record
    return record = {
        firstName: arr[0],
        familyName: arr[1], 
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []

    }
}

function createEmployeeRecords(arrs) {
    let records = arrs.map(arr => createEmployeeRecord(arr))
    return records
}

function createTimeInEvent(dateStamp) {
    let date = dateStamp.split(' ');
    this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(date[1]),
      date: date[0]
    });
    return this;
  }

function createTimeOutEvent(dateStamp) {
    let date = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(date[1]),
        date: date[0]
    });
    return this;
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(timeEvent => timeEvent.date === date);
    let timeOut = this.timeOutEvents.find(timeEvent => timeEvent.date === date);
    return (timeOut.hour - timeIn.hour)/100;
}

function wagesEarnedOnDate(date) {
    let wages = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return wages
}

function calculatePayroll(arrs){

    let payroll = arrs.reduce((total, emp) => {return total + allWagesFor.call(emp)}, 0) //removed 'this' from arguments as the allWagesFor method 'bind'ed 'this' as the execution context
    return payroll

}

function findEmployeeByFirstName(srcArray, firstName){
    let name = srcArray.find(r => r.firstName === firstName)
    return name
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