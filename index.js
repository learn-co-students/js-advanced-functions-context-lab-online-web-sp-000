function createEmployeeRecord (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};


function createEmployeeRecords(array){
    let newArray = []
    array.forEach(function(person){
        newArray.push(createEmployeeRecord(person))
    })

    return newArray
}

function createTimeInEvent(dateStamp) {
    let timeIn = this.timeInEvents;
    timeIn.push({
      type: "TimeIn",
      hour: parseInt(dateStamp.split(" ")[1], 10),
      date: dateStamp.split(" ")[0]
    });
    return this;
};
  
function createTimeOutEvent(dateStamp) {
    let timeIn = this.timeOutEvents;
    timeIn.push({
      type: "TimeOut",
      hour: parseInt(dateStamp.split(" ")[1], 10),
      date: dateStamp.split(" ")[0]
    });
    return this;
};

function hoursWorkedOnDate(date){

    let hourIn = this.timeInEvents.filter(function(event){
        return event.date === date
    })

    let hourOut = this.timeOutEvents.filter(function(event){
        return event.date === date
    })

    return (hourOut[0].hour - hourIn[0].hour) / 100
}


function wagesEarnedOnDate (dateForm) {
    let hours = hoursWorkedOnDate.call(this, dateForm)
    return this.payPerHour * hours
}

function payrollExpense () {

}

function findEmployeeByFirstName(records, firstName) {
    let record = records.filter(function(e){
        return e.firstName === firstName
    })
    return record[0]
}

function calculatePayroll(employees){
    let allWages = 0

    employees.forEach(function(employee){
        allWages += allWagesFor.call(employee)
    })
    
    return allWages
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