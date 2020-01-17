/* Your Code Here */

function createEmployeeRecord(arr) {
    let obj = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj;
}

function createEmployeeRecords(er) {
    let array = []
    for (let i = 0; i < er.length; i++) {
        array.push(createEmployeeRecord(er[i]))
    }
    return array;
}



function createTimeInEvent(ds) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(ds.split(" ")[1]),
        date: ds.split(" ")[0]
    })
    return this;
}


function createTimeOutEvent(ds) {
    this.timeOutEvents.push({
        type:"TimeOut",
        hour: parseInt(ds.split(" ")[1]),
        date: ds.split(" ")[0]
    })
    return this;
}


function hoursWorkedOnDate(dateForm) {
    let timeIn = this.timeInEvents.find(obj => obj.date === dateForm);
    let timeOut = this.timeOutEvents.find(obj => obj.date === dateForm);
    return (timeOut.hour - timeIn.hour) / 100;
}



function wagesEarnedOnDate(dateForm) {
    return hoursWorkedOnDate.call(this, dateForm) * this.payPerHour;
}



function calculatePayroll(empRec) {
    return empRec.reduce(function(total, cv) { return total + allWagesFor.call(cv)}, 0);
}



function findEmployeeByFirstName(srcArray, firstName) {
   return srcArray.find(function(name) {
       return name.firstName === firstName;
   })
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