/* Your Code Here */

 let createEmployeeRecord = function(recordArr) {

     return {
         firstName: recordArr[0],
         familyName: recordArr[1],
         title: recordArr[2],
         payPerHour: recordArr[3],
         timeInEvents: [],
         timeOutEvents: []
     }
 }

 let createEmployeeRecords = function(arr) {

     return arr.map(employee => createEmployeeRecord(employee))
 }

 let createTimeInEvent = function(date) {

     let [day, hour] = date.split(" ")

     let timeInObj = {
         type: "TimeIn",
         hour: parseInt(hour),
         date: day
     }
     this.timeInEvents.push(timeInObj)
     return this
 }

 let createTimeOutEvent = function(date) {

     let [day, hour] = date.split(" ")
     let timeOutObj = {
       type: "TimeOut",
       hour: parseInt(hour),
       date: day
     }

     this.timeOutEvents.push(timeOutObj)
     return this
 }

 let hoursWorkedOnDate = function(date) {

     let timeIn = this.timeInEvents.find(t => t.date === date)
     let timeOut = this.timeOutEvents.find(t => t.date === date)

     let hoursWorked = (timeOut.hour - timeIn.hour)/100
     return hoursWorked
 }

 let wagesEarnedOnDate = function(date) {
     let pay = hoursWorkedOnDate.call(this, date) * this.payPerHour
     return pay
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

 let findEmployeeByFirstName = function(srcArr, firstName) {
     return srcArr.find(record => record.firstName === firstName)
 }

 let calculatePayroll = function(employeesArr) {

     const reducer = (total, employee) => total + allWagesFor.call(employee)   
     return employeesArr.reduce(reducer, 0)
 }
