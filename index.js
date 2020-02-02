/* Your Code Here */

let createEmployeeRecord = function(array){
  let obj = {
    "firstName": array[0],
    "familyName": array[1],
    "title": array[2],
    "payPerHour": array[3],
    "timeInEvents": [],
    "timeOutEvents": []
  }
  return obj;
}

let createEmployeeRecords = function(array){
  return array.map(x => createEmployeeRecord(x));
}

let findEmployeeByFirstName = function(allEmployeesArray, firstName){
  return allEmployeesArray.find(x => x.firstName === firstName);
}


let createTimeInEvent = function(date){
  let [day, hour] = date.split(" ");
  this.timeInEvents.push({"type": "TimeIn", "date": day, "hour": parseInt(hour)});
  return this;
}

let createTimeOutEvent = function(date){
  let [day, hour] = date.split(" ");
  this.timeOutEvents.push({"type": "TimeOut", "date": day, "hour": parseInt(hour)});
  return this;
}

let hoursWorkedOnDate = function(date){
  let timeOut = this.timeOutEvents.find(x => x.date === date).hour;
  let timeIn = this.timeInEvents.find(x => x.date === date).hour;
  console.log(timeOut);
  return (timeOut - timeIn)/100;
  //        expect(hoursWorkedOnDate.call(cRecord, "44-03-15")).to.equal(2)

}

let wagesEarnedOnDate = function(date){
  return (this.payPerHour * hoursWorkedOnDate.call(this, date));
}

let calculatePayroll = function(records){
  return records.reduce((memo, rec) => memo + allWagesFor.call(rec), 0);
}

let payrollExpense = function(){}
let allRecords = function(){}


//let wagesEarnedOnDate = function(){}
//let wagesEarnedOnDate = function(){}

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