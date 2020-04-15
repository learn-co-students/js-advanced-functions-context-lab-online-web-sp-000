/* Your Code Here */
function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    };
  };
  
  function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee));
  };
  
  function createTimeInEvent(dateTime) {
      const [date, hour] = dateTime.split(' ')
  
      this.timeInEvents.push({
          type: "TimeIn",
          hour: parseInt(hour), 
          date
      })
      return this;
  };
  
  function createTimeOutEvent(dateTime) {
      const [date, hour] = dateTime.split(' ')
  
      this.timeOutEvents.push({
          type: "TimeOut",
          hour: parseInt(hour),
          date
      })
  
      return this;
  };
  
  function hoursWorkedOnDate(date) {
    return (((this.timeOutEvents.find(event => event.date === date).hour) 
    - (this.timeInEvents.find(event => event.date === date).hour)))/100;
  };
  
  function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  };
  
  function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total += allWagesFor.call(employee), 0);
  };
  
  function findEmployeeByFirstName(employees, firstNameStr) {
    return employees.find(employee => employee.firstName === firstNameStr);
  };
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