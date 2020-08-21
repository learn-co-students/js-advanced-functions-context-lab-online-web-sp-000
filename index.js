/* Your Code Here */

const createEmployeeRecord = (employeeData) => {
  return {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployeeRecords = (arrayOfEmployees) => {
  return arrayOfEmployees.map((employee) => createEmployeeRecord(employee));
};

function createTimeInEvent(dateTimeStamp) {
  const [date, hour] = dateTimeStamp.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });

  return this;
}

function createTimeOutEvent(dateTimeStamp) {
  const [date, hour] = dateTimeStamp.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  });

  return this;
}

function hoursWorkedOnDate(dateSought) {
  const inEvent = this.timeInEvents.find((e) => e.date === dateSought);
  const outEvent = this.timeOutEvents.find((e) => e.date === dateSought);

  return (outEvent.hour - inEvent.hour) / 100;
}

function wagesEarnedOnDate(dateSought) {
  return hoursWorkedOnDate.call(this, dateSought) * this.payPerHour;
}

let findEmployeeByFirstName = function (srcArray, firstName) {
  return srcArray.find(function (rec) {
    return rec.firstName === firstName;
  });
};

function calculatePayroll(arrayOfEmployeeRecords) {
  return arrayOfEmployeeRecords.reduce(function (memo, rec) {
    return memo + allWagesFor.call(rec);
  }, 0);
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
