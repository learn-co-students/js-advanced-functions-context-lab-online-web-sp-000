/* Your Code Here */

function createEmployeeRecord(array) { 
    return { 
        firstName: array[0], 
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [], 
        timeOutEvents: []
        }
}

function createEmployeeRecords(array) { 
    return array.map(function(val) { 
        return createEmployeeRecord(val)
    }
    )}


    function createTimeInEvent(date) { 
        this.timeInEvents.push({
            type: "TimeIn", 
            hour: parseInt(date.split(" ")[1]),
            date: date.split(" ")[0]
        })
    
        return this

    }

    function createTimeOutEvent(date) { 
        this.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(date.split(" ")[1]),
            date: date.split(" ")[0]
        })
        return this 
    }

    function hoursWorkedOnDate(dateToSearch) { 
        // console.log(dateToSearch)
        let timeIn = this.timeInEvents.find(timeInEvent => timeInEvent.date === dateToSearch)

        let timeOut = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === dateToSearch)

        return (timeOut.hour - timeIn.hour) / 100

    }

    function wagesEarnedOnDate(date) { 
        return hoursWorkedOnDate.call(this, date) * this.payPerHour
    }

    let calculatePayroll = function(arrayOfEmployeeRecords) { 
       return arrayOfEmployeeRecords.reduce(function(memo, rec){ 
        return memo + allWagesFor.call(rec)
       }, 0)
    }

    function findEmployeeByFirstName(array, firstName) { 
        return array.find(element => element.firstName === firstName)
    }

    // //const csvDataEmployees = [
    //     ["Thor", "Odinsson", "Electrical Engineer", 45],
    //     ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    //     ["Natalia", "Romanov", "CEO", 150],
    //     ["Darcey", "Lewis", "Intern", 15],
    //     ["Jarvis", "Stark", "CIO", 125],
    //     ["Anthony", "Stark", "Angel Investor", 300]
    //   ]
  
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
    }.bind(this), 0) 
    // <== Hm, why did we need to add bind() there? We'll discuss soon!
    
    return payable
}