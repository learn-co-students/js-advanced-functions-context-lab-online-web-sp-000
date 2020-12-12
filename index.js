/* Your Code Here */
function createEmployeeRecord(employee) {
  return {
    firstName : employee[0],
    familyName : employee[1],
    title : employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(records) {
  return records.map(createEmployeeRecord)
};

function createTimeInEvent(timeIn){
  let [date, hour] = timeIn.split(' ')
  let newEvent = {type: "TimeIn", hour: parseInt(hour), date: date}
  this.timeInEvents.push(newEvent)
  return this
};


function createTimeOutEvent(timeOut){
  let [date, hour] = timeOut.split(' ')
  let newEvent = {type: "TimeOut", hour: parseInt(hour), date: date}
  this.timeOutEvents.push(newEvent)
  return this
};

function hoursWorkedOnDate(date) {
  let punchIn = this.timeInEvents.find(function(n){
     return n.date === date})
     console.log(punchIn)
  let punchOut = this.timeOutEvents.find(n => {
     return n.date === date})

    return (punchOut.hour - punchIn.hour)/100
}

function wagesEarnedOnDate(date) {
  let wages = hoursWorkedOnDate.call(this, date) * this.payPerHour
  return wages
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

function findEmployeeByFirstName(srcArray, name){
     return srcArray.find(function(employee) {
       return employee.firstName === name
    })
  }

  function calculatePayroll(employees) {
    return employees.reduce(function(memo, employee){
      return memo + allWagesFor.call(employee)
    }, 0)
  };
