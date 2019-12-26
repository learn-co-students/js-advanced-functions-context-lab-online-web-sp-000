/* Your Code Here */

function createEmployeeRecord(array){
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  };
  
  function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(employeeArray => {
      return createEmployeeRecord(employeeArray)
    });
  };
  
  function createTimeInEvent(dateStamp){
    let timeIn = this.timeInEvents;
    timeIn.push({
      type: "TimeIn",
      hour: parseInt(dateStamp.split(" ")[1], 10),
      date: dateStamp.split(" ")[0]
    });
    return this;
  };
  
  function createTimeOutEvent(dateStamp){
    let timeIn = this.timeOutEvents;
    timeIn.push({
      type: "TimeOut",
      hour: parseInt(dateStamp.split(" ")[1], 10),
      date: dateStamp.split(" ")[0]
    });
    return this;
  };
  
  function hoursWorkedOnDate(dateForm){
    let hoursWorked;
    let timeIn = this.timeInEvents.find(object =>{
      return object.date === dateForm;
    });
    let timeOut = this.timeOutEvents.find(object =>{
      return object.date === dateForm;
    });
    return ((timeOut.hour - timeIn.hour)/100);
  };
  
  function wagesEarnedOnDate(dateForm){
    let hours = hoursWorkedOnDate.call(this, dateForm);
    let wages = hours * this.payPerHour
    return wages
  };
  
  function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(employee => {
      return employee.firstName === firstName
    });
  };
  
  function calculatePayroll(employeeArray) {
    return employeeArray.reduce((payrollTotal, employee) => {
      return allWagesFor.call(employee) + payrollTotal;
    }, 0)
  };
  
  let allWagesFor = function () {
      let eligibleDates = this.timeInEvents.map(function (e) {
          return e.date
      })
  
      let payable = eligibleDates.reduce(function (memo, d) {
          return memo + wagesEarnedOnDate.call(this, d)
      }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
  
      return payable
  }