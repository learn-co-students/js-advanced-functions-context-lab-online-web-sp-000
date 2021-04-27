/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function (employeeArray) {
  const employeeObject = {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employeeObject
};

let createEmployeeRecords = function(employeeRecords) {
  return employeeRecords.map(createEmployeeRecord)
}

let createTimeInEvent = function(timeIn) {
  let [date, time] = timeIn.split(" "); //destructing assignment
  const newTimeInEvent = {
    type: "TimeIn",
    hour: parseInt(time, 10), //change hour to 'Number' data-type
    date //can just write 'date' bc we want a key of 'date' with a value equal to the local variable 'date' available in this scope
  };
  this.timeInEvents.push(newTimeInEvent);
  return this
}

//question: why does
// let createTimeOutEvent = (timeOut) => {
//   function definition
// }
// NOT work? but the below way of writing the anonymus function DOES work:
//...saw in documentation: "Arrow functions do not have their own this. They are not well suited for defining object methods."
let createTimeOutEvent = function(timeOut) {
  let [date, time] = timeOut.split(" ");
  const newTimeOutEvent = {
    type: "TimeOut",
    hour: parseInt(time, 10),
    date
  };
  this.timeOutEvents.push(newTimeOutEvent);
  return this
}

let hoursWorkedOnDate = function(date) {
  let inEvent = this.timeInEvents.find( timeIn => timeIn.date === date )
  let outEvent = this.timeOutEvents.find( timeOut => timeOut.date === date )

  return (outEvent.hour- inEvent.hour) / 100
}

// question: how does 'this' get properly passed in to 'hoursWorked...' below:
let wagesEarnedOnDate = function(date) {
  const hours = hoursWorkedOnDate.call(this, date);
  const payRate = this.payPerHour;
  return hours * payRate
}

let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find( emp => emp.firstName === firstName )
}

let calculatePayroll = function(employeesRecords) {
  // reducer function declared inline:
  return employeesRecords.reduce( (accum, currEmployee) => {
    return accum + allWagesFor.call(currEmployee)
  }, 0)

  //Alt-reducer function declared separately:
  // function reducer(accum, currEmployee) {
  //   return accum + allWagesFor.call(currEmployee)
  // }

  // return employeesRecords.reduce(reducer, 0)

}
