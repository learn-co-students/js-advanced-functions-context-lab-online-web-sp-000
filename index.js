
function createEmployeeRecord(arr){
    return {
      firstName: arr[0],
      familyName: arr[1], 
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    }    
}

function createEmployeeRecords(arr){
    return arr.map((e) => {
        return createEmployeeRecord(e)
    })
}

function createTimeInEvent(t) {
    let timeInRecord = {
      type: "TimeIn",
      hour: parseInt(t.slice(11), 10),
      date: t.slice(0, 10)
        }
    this.timeInEvents.push(timeInRecord);
    return this;
}

// let timeInStamp = "2020-08-10 0800";
// createTimeInEvent.call(createEmployeeRecord(emp), timeInStamp);

function createTimeOutEvent(t) {
    let timeOutStamp = {
        type: "TimeOut",
        hour: parseInt(t.slice(11), 10),
        date: t.slice(0, 10)
    }
    this.timeOutEvents.push(timeOutStamp);
    return this;
}

function hoursWorkedOnDate(dateStamp) {
    let inEventRecord = this.timeInEvents.find(function(e) {
        return e.date === dateStamp;
    }, this)
    
    let outEventRecord = this.timeOutEvents.find(function(e) {
        return e.date === dateStamp;
    }, this)

    console.log(inEventRecord.hour)
    console.log(outEventRecord.hour)
    let result = (outEventRecord.hour - inEventRecord.hour) / 100
    return result;
}

emp = {
    firstName: 'James',
    familyName: 'Pollard',
    title: 'Engineer',
    payPerHour: 60.5,
    timeInEvents: [ { type: 'TimeIn', hour: 900, date: "44-03-15" } ],
    timeOutEvents: [ { type: 'TimeOut', hour: 1100, date: "44-03-15" } ]
  }

// hoursWorkedOnDate.call(emp, "44-03-15");


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