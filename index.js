/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(infoArray) {
   return Object.assign({}, 
    { firstName: infoArray[0] }, 
    { familyName: infoArray[1] }, 
    { title: infoArray[2] }, 
    { payPerHour: infoArray[3] }, 
    { timeInEvents: [] }, 
    { timeOutEvents: [] } );
}

function createEmployeeRecords(array) {
    return array.map(employee => createEmployeeRecord(employee));
}

function createTimeInEvent(dateStamp) {
    let clockIn = Object.assign({}, { type: 'TimeIn' }, { hour: parseInt(dateStamp.split(' ')[1]) }, { date: dateStamp.split(' ')[0] })
    this.timeInEvents.push(clockIn);
    return this;
}

function createTimeOutEvent(dateStamp) {
    let clockOut = Object.assign({}, { type: 'TimeOut' }, { hour: parseInt(dateStamp.split(' ')[1]) }, { date: dateStamp.split(' ')[0] })
    this.timeOutEvents.push(clockOut);
    return this;
}

function hoursWorkedOnDate(date) {
    let clockIn = this.timeInEvents.find(event => event.date === date).hour
    let clockOut = this.timeOutEvents.find(event => event.date === date).hour

    return (clockOut - clockIn) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function calculatePayroll(array) {
    // add all wages for each employee of the array
    let reducer = (acc, employee) => acc + allWagesFor.call(employee)
    return array.reduce(reducer, 0);
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

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}
