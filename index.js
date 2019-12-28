/* Your Code Here */

//function createEmployeeRecord takes in a 4-element Array of String, String, String, and Number corresponding
//to a first name, family name, title and pay rate per hour. Returns JS Object with keys: firstName, familyName,
//title, payPerHour, timeInEvents, timeOutEvents.
//Behavior: Loads Array elements into corresponding Object properties. Additionally, initialize empty Arrays
//on the properties timeInEvents and timeOutEvents.

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

//function createEmployeeRecords arguments: Array of Arrays. Returns Array of Objects. Behavior: Converts each
//nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array.

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(employeeArray => {
        return createEmployeeRecord(employeeArray)
    });
};

//function createTimeInEvent Argument(s) - An employee record Object, A date stamp ("YYYY-MM-DD HHMM").
//Returns The employee record. Behavior: Add an Object with keys to the EMPTY timeInEvents Array on the
//record Object: type: Set to "TimeIn", hour: Derived from the argument, date: Derived from the argument.

function createTimeInEvent(dateStamp) {
    let timeIn = this.timeInEvents;
    timeIn.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0]
    });
    return this;
};

//function createTimeOutEvent Argument(s) - An employee record Object, A date stamp ("YYYY-MM-DD HHMM")
//Returns The employee record. Behavior: Add an Object with keys to the EMPTY timeOutEvents Array on the
//record Object: type: Set to "TimeOut", hour: Derived from the argument, date: Derived from the argument.

function createTimeOutEvent(dateStamp) {
    let timeOut = this.timeOutEvents;
    timeOut.push({
      type: "TimeOut",
      hour: parseInt(dateStamp.split(" ")[1], 10),
      date: dateStamp.split(" ")[0]
    });
    return this;
};

//function hoursWorkedOnDate Argument(s) - A date of the form "YYYY-MM-DD".
//Returns Hours worked, an Integer. Behavior:  Given a date, find the number of hours elapsed between
//that date's timeInEvent and timeOutEvent

function hoursWorkedOnDate(dateForm) {
    let hoursWorked; //declared for no fucking reason??
    let timeIn = this.timeInEvents.find(Object => {
        return Object.date === dateForm;
    });
    let timeOut = this.timeOutEvents.find(Object => {
        return Object.date === dateForm;
    });
    return ((timeOut.hour - timeIn.hour)/100);
};

//function wagesEarnedOnDate Argument(s) -  A date of the form "YYYY-MM-DD"
//Returns Pay owed. Behavior:  Using hoursWorkedOnDate, multiply the hours by the record's payRate to
//determine amount owed. Amount should be returned as a number.

function wagesEarnedOnDate(dateForm) {
    let hours = hoursWorkedOnDate.call(this, dateForm);
    let wages = hours * this.payPerHour
    return wages
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

//function findEmployeeByFirstName Argument(s) - srcArray: Array of employee records, firstName: String
//representing a first name held in an employee record. Returns Matching record or undefined. Behavior:
//Test the firstName field for a match with the firstName argument

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => {
        return employee.firstName === firstName
    });
};

//function calculatePayroll Argument(s) - Array of employee records. Returns pay owed for all dates, as
//a number. Behavior: Using wagesEarnedOnDate, accumulate the value of all dates worked
//by the employee in the record used as context. Amount should be returned as a number.

function calculatePayroll(employeeArray) {
    return employeeArray.reduce((payrollTotal, employee) => {
        return allWagesFor.call(employee) + payrollTotal;
    }, 0);
};