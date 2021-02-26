let createEmployeeRecord = function([...arr]) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(arr) {
    let row = arr.map(e => createEmployeeRecord(e));
    return row;
}

let createTimeInEvent = function(day) {
    let [date, hour] = day.split(" ");

    this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
    })

    return this
}

let createTimeOutEvent = function(day) {
    let [date, hour] = day.split(" ");

    this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date: date
    })

    return this;
}

function hoursWorkedOnDate (date) {
   return computeHours.call(this, date);
}

function spl(day) {
    let [date, hour] = day.split(" ");
    return date, hour;
}

function computeHours(date) {
    let hourIn = this.timeInEvents.find(el => el.date === date);
    let hourOut = this.timeOutEvents.find(el => el.date === date);
    return (hourOut.hour - hourIn.hour)/100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function calculatePayroll(arr) {
    return arr.reduce(function(memo, rec) {
        return memo + allWagesFor.call(rec)
    }, 0)
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
}

