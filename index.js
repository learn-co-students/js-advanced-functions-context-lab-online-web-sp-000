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

function createEmployeeRecord(ary){
    const [firstName, familyName, title, payPerHour] = ary
    const empObj = {firstName: firstName, familyName: familyName, title: title, payPerHour: payPerHour, timeInEvents: [], timeOutEvents: []}
    return empObj
 
 }

 
function createEmployeeRecords(rows){
    return   rows.map((e) => createEmployeeRecord(e));
       
  }
  
  function createTimeInEvent(dateStamp){
  
     let newEvent = {type: "TimeIn", date: dateStamp.split(" ")[0] , hour: parseInt(dateStamp.split(" ")[1]) }
      this.timeInEvents.push(newEvent);
      return this
  }
  
  function createTimeOutEvent(dateStamp){
      let newEvent = {type: "TimeOut", date: dateStamp.split(" ")[0] , hour: parseInt(dateStamp.split(" ")[1]) }
      this.timeOutEvents.push(newEvent);
      return this
  }
  
  function hoursWorkedOnDate(date){
   
  let intTime = this.timeInEvents.find((el) => el.date == date).hour;
  let outTime = this.timeOutEvents.find((el) => el.date == date).hour;

  return (outTime - intTime)/100;
  }
  
  function wagesEarnedOnDate(date){
      let hours = hoursWorkedOnDate.call(this, date);
      return hours * this.payPerHour
  
  }
  
 // function allWagesFor(obj){
 //     
 // return obj.timeInEvents.reduce((a, b) => {
 //   return a + wagesEarnedOnDate(obj, b.date) }, 0)
 // }
  
  function calculatePayroll(array){
      console.log(array)
  return array.reduce((a, b) => a + allWagesFor.apply(b), 0 )
  }
  
  function findEmployeeByFirstName(array, name){
  return array.find((el) => el.firstName == name)
  }