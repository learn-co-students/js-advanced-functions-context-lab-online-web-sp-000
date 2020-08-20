
let createEmployeeRecord = function(employee){
    return {
      firstName: employee[0],
      familyName: employee[1], 
      title: employee[2],
      payPerHour: employee[3],
      timeInEvents: [],
      timeOutEvents: []
    }    
}

let createEmployeeRecords = function(employees){
    return employees.map((e) => {
        return createEmployeeRecord(e)
    })
}

let createTimeInEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    let timeInRecord = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
        }
    this.timeInEvents.push(timeInRecord);
    return this;
}

// createTimeInEvent.call(createEmployeeRecord(emp), timeInStamp);

let createTimeOutEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    let timeOutStamp = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
        }
    this.timeOutEvents.push(timeOutStamp)
    return this;
}

let hoursWorkedOnDate = function(dateStamp) {
    let inEventRecord = this.timeInEvents.find(function(e) {
        return e.date === dateStamp;
    })
    
    let outEventRecord = this.timeOutEvents.find(function(e) {
        return e.date === dateStamp;
    })
    return (outEventRecord.hour - inEventRecord.hour) / 100
}

let wagesEarnedOnDate = function(dateStamp) {
    let wageEarned = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
    return parseFloat(wageEarned.toString())
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

let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find((e) => {
      return e.firstName === firstName
    })
  }
  
let calculatePayroll = function(employees) {
    return employees.reduce((memo, i)=>{
        return memo + allWagesFor.call(i)
    }, 0)
}