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

function createEmployeeRecord(employeeArr){
    let employee = {};
  
    employee.firstName = employeeArr[0];
    employee.familyName = employeeArr[1];
    employee.title = employeeArr[2];
    employee.payPerHour = employeeArr[3];
    employee.timeInEvents = [];
    employee.timeOutEvents = [];
  
    return employee;
  }
  
  function createEmployeeRecords(arrOfArrays){
    return arrOfArrays.map(p => {
      return createEmployeeRecord(p);
    })
  }
  
  function createTimeInEvent(dateStamp) {
    let hour = parseInt(dateStamp.split(' ')[1]);
    let date = dateStamp.split(' ')[0];
    let timeInEventObj = {};
  
    timeInEventObj.type = "TimeIn";
    timeInEventObj.hour = hour;
    timeInEventObj.date = date;
  
    this.timeInEvents.push(timeInEventObj);
  
    return this;
  }
  
  function createTimeOutEvent(dateStamp) {
    let hour = parseInt(dateStamp.split(' ')[1]);
    let date = dateStamp.split(' ')[0];
    let timeOutEventObj = {};
  
    timeOutEventObj.type = "TimeOut";
    timeOutEventObj.hour = hour;
    timeOutEventObj.date = date;
  
    this.timeOutEvents.push(timeOutEventObj);
  
    return this;
  }
  
  function hoursWorkedOnDate(dateString) {
    //"0044-03-15"
    console.log(this);
    let timeOutE = this.timeOutEvents.find(obj => obj.date === dateString.split(' ')[0]); 
    let timeInE = this.timeInEvents.find(obj => obj.date === dateString.split(' ')[0]); 
    
    let hourOut = parseInt(timeOutE.hour.toString().slice(0,-2));
    let hourIn = parseInt(timeInE.hour.toString().slice(0,-2));
    let hours = hourOut - hourIn;
    return hours;
  }
  
  function wagesEarnedOnDate(dateString) {
    let hours = hoursWorkedOnDate.call(this, dateString);
    return hours * (this.payPerHour);
  }

  function findEmployeeByFirstName(allEmployeeArrayOfObjects, firstNameString) {
    return allEmployeeArrayOfObjects.find(obj => obj.firstName === firstNameString);
  }
  
  function calculatePayroll(arrayOfEmployeeObjects) {
    let s = 0;
    return arrayOfEmployeeObjects.reduce((function(s,el) {
      return allWagesFor.call(el) + s;
    }),s);
  }
