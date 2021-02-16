/* Your Code Here */

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

function createOneEmployeeRecord(array) {
    let employeeObject = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeObject;
};



function createEmployeeRecord(array) {
    let result = createOneEmployeeRecord(array)
    return result;
};

function createEmployeeRecords(array) {
    let result = array.map( function(element) { return createEmployeeRecord(element) })
    return result
}

// how it will be used:
//updatedBpRecord = createTimeInEvent.call(bpRecord, "2014-02-28 1400")
function createTimeInEvent(timeString) {
    let timeObject = {
        type: "TimeIn",
        date: timeString.split(" ")[0],
        hour: parseInt(timeString.split(" ")[1])
    };
    this.timeInEvents.push(timeObject);
    return this;
};

function createTimeOutEvent(timeString) {
    let timeObject = {
        type: "TimeOut",
        date: timeString.split(" ")[0],
        hour: parseInt(timeString.split(" ")[1])
    };
    this.timeOutEvents.push(timeObject);
    return this;
};



function hoursWorkedOnDate(dateString) {
    let timeInEvent = this.timeInEvents.find( function(obj) { return obj.date === dateString});
    let timeOutEvent = this.timeOutEvents.find( function(obj) { return obj.date === dateString});

    //if date found
    if (timeInEvent && timeOutEvent) {
        //ex: 1600 - 0900 = 700 = 7 hours
        const hours = (timeOutEvent.hour - timeInEvent.hour) / 100;
        return hours;
    } else {
        return;
    }

};



function wagesEarnedOnDate(dateString) {
    let wages = this.payPerHour * hoursWorkedOnDate.call(this, dateString);
    return wages;
};


function findEmployeeByFirstName(allEmployees, firstName) {
    return allEmployees.find( function(employee) { return employee.firstName === firstName})
}



function calculatePayroll(employees) {
    //the structure is same as allWagesFor. find some info related to each element in array. then sum up the elements.

    let wagesArray = [];
    wagesArray = employees.map( function(employee) { return allWagesFor.call(employee) });

    let totalWages;
    totalWages = wagesArray.reduce( function(accum, currentVal) { return accum + currentVal} )
    return totalWages;

};

