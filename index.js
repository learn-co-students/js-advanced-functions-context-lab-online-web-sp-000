function createEmployeeRecord(record) {
  let clockIn = [];
  let clockOut = [];
  let details = {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: clockIn,
    timeOutEvents: clockOut,
  };
  return details;
}

function createEmployeeRecords(records) {
  let arr = records.map(createEmployeeRecord);
  return arr;
}

let createTimeInEvent = function (dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date,
  });
  return this;
};

let createTimeOutEvent = function (dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });
  return this;
};

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.filter((d) => d.date === date)[0];
  let timeOut = this.timeOutEvents.filter((d) => d.date === date)[0];

  return (timeOut.hour - timeIn.hour) / 100;
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
