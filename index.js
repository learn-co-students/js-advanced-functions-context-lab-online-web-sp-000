/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(arr){
    let employeeObj = {
        firstName : arr[0],
        familyName : arr[1],
        title : arr[2],
        payPerHour :arr[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employeeObj
}

function createEmployeeRecords(arrArr){
    return arrArr.map(function(emp){
        return createEmployeeRecord(emp)
    });
}

function createTimeInEvent(dateStamp){
        let [d, h] = dateStamp.split(' ');
        this.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(h, 10),
            date: d
        })
        return this
}

function createTimeOutEvent(dateStamp){
    let [d, h] = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(h, 10),
        date: d
    })
    return this
}

function hoursWorkedOnDate(givenDate){
    let inEvent = this.timeInEvents.find(function(emp){
        return emp.date === givenDate
    })
    let outEvent = this.timeOutEvents.find(function(emp){
        return emp.date === givenDate
    })
    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate (givenDate){
    let amount = hoursWorkedOnDate.call(this, givenDate)
        * this.payPerHour
    return parseFloat(amount.toString())
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(function(record){
        return record.firstName === firstName
    })
}

function calculatePayroll (emprecArr){
    return emprecArr.reduce(function(total, records){
        return total + allWagesFor.call(records)
    }, 0)
}
