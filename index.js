/* Your Code Here */
function createEmployeeRecord([first_name, family_name, position, rate]) {
    const employee = {
        firstName: first_name, 
        familyName: family_name, 
        title: position, 
        payPerHour: rate, 
        timeInEvents: [], 
        timeOutEvents: []
    };
    return employee;
}

function createEmployeeRecords(data) {
    return data.map (x => createEmployeeRecord(x));
}

let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
let updatedBpRecord = createTimeInEvent.call(bpRecord, "2014-02-28 1400")
let newEvent = updatedBpRecord.timeInEvents[0]
function createTimeInEvent(timeStamp) {
    // let hr = parseInt(timeStamp.split(" ")[1].slice(0,2));
    this.timeInEvents.push({date: timeStamp.split(" ")[0], hour: parseInt(timeStamp.split(" ")[1]), type: "TimeIn"})
    return this;
}

function createTimeOutEvent(timeStamp) {
    // let hr = parseInt(timeStamp.split(" ")[1].slice(0,2));
    this.timeOutEvents.push({date: timeStamp.split(" ")[0], hour: parseInt(timeStamp.split(" ")[1]), type: "TimeOut"})
    return this;
}

function hoursWorkedOnDate(date) {
    let a = this.timeInEvents.find( d => d.date === date);
    let b = this.timeOutEvents.find( d => d.date === date);
    if (a && b) {
        let result = (b.hour - a.hour)/100;
        return result;
    }
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

// function allWagesFor(record) {
//     let totalWage = 0;
//     record.timeInEvents.map(punchIn => {
//         totalWage += wagesEarnedOnDate(record, punchIn.date);
//     });
//     return totalWage;

//     // return record.timeInEvents.forEach(date => console.log(date));
//     // wagesEarnedOnDate(record, date)
// }

function findEmployeeByFirstName(group, target) {
    return group.find(e => e.firstName === target);
}
function calculatePayroll(employeeList) {
    let payroll = 0;
    employeeList.map(employee => {
        payroll += allWagesFor.call(employee);
    });
    return payroll;
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