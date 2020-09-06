/* Your Code Here */

function createEmployeeRecord(array) {
    let obj = {};
    obj.firstName = array[0];
    obj.familyName = array[1];
    obj.title = array[2];
    obj.payPerHour = array[3];
    obj.timeInEvents = [];
    obj.timeOutEvents = [];
    return obj;
}

function createEmployeeRecords(aoa) {
    let aoo = aoa.map(array => {
        return createEmployeeRecord(array);
    })
    return aoo;
}

function createTimeInEvent(str) {
    let obj = {};
    obj.type = "TimeIn";
    obj.hour = parseInt(str.split(" ")[1]);
    obj.date = str.split(" ")[0];
    // console.log(this);
    this.timeInEvents.push(obj);
    return this;
    // let obj = {
    //     this.type: "TimeIn",
    //     this.hour: str.split(" ")[1],
    //     this.date: str.split(" ")[0]
    // }
    // return obj;
}

function createTimeOutEvent(str) {
    let obj = {};
    obj.type = "TimeOut";
    obj.hour = parseInt(str.split(" ")[1]);
    obj.date = str.split(" ")[0];
    // console.log(this);
    this.timeOutEvents.push(obj);
    return this;
}

function hoursWorkedOnDate(date) {
    // console.log(this.timeOutEvents.hour);
    // console.log(this);
    let correctTimeOutEvent = this.timeOutEvents.find( e => e.date === date);
    let correctTimeInEvent = this.timeInEvents.find(e => e.date === date);
    return ((correctTimeOutEvent.hour - correctTimeInEvent.hour) / 100);
}

function wagesEarnedOnDate(date) {
    let payOwed = 0;
    // console.log(this);
    // console.log(date);
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    // console.log(hoursWorked);
    payOwed = hoursWorked * this.payPerHour;
    return payOwed;
}

function findEmployeeByFirstName(srcArray, firstName) {
    // console.log(this);
    // console.log(srcArray);
    // console.log(firstName);
    let emp = srcArray.find( e => e.firstName === firstName);
    // console.log(emp);
    return emp;
}

function calculatePayroll(array) {
    let amount = array.reduce(function(accu, emp) {
        return (accu + allWagesFor.call(emp));
    }, 0)
    return amount;
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