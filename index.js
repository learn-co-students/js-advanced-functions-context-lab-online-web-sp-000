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

let stuff = ["Gray", "Worm", "Security", "1"]

let otherstuff = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
  ]

  let createEmployeeRecord = function(ar) {
    class Employee{
        constructor(ar){
            this.firstName = ar[0];
            this.familyName = ar[1];
            this.title = ar[2];
            this.payPerHour = ar[3];
            this.timeInEvents = [];
            this.timeOutEvents = [];
        }
    }
    let newObj = new Employee(ar)
    return newObj;
}

let createEmployeeRecords = function(ar) {
    let newArray = ar.map( employee => createEmployeeRecord(employee))
    return newArray
}


// let tInRec = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])

let createTimeInEvent = function(date) {
    let newTime = new Object();
    newTime.type = "TimeIn";
    newTime.hour = parseInt(date.split(" ")[1]);
    newTime.date = date.split(" ")[0];
    this.timeInEvents.push(newTime);
    return this
}

let createTimeOutEvent = function(date) {
    let newTime = new Object();
    newTime.type = "TimeOut";
    newTime.hour = parseInt(date.split(" ")[1]);
    newTime.date = date.split(" ")[0];
    this.timeOutEvents.push(newTime);
    return this
}


// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
// let tIn = createTimeInEvent.call(cRecord, "44-03-15 0900")
// let tOut =createTimeOutEvent.call(cRecord, "44-03-15 1100")

let hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(inDate => inDate.date === date);
    let timeOut = this.timeOutEvents.find(outDate => outDate.date === date);
    let hrsWorked = (timeOut.hour - timeIn.hour) / 100;
    return hrsWorked;
}

let wagesEarnedOnDate = function(date) {
    let wages = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return wages
}

// let allWagesFor = function(employee) {
//     let array = employee.timeInEvents.map( timeIn => wagesEarnedOnDate(employee, timeIn.date))
//     let totalhrs = array.reduce ( (total, element) => element + total, 0)
//     return totalhrs
// }

let calculatePayroll = function(employees) {
    let array = employees.map( employee => allWagesFor.call(employee))
    let totalPay = array.reduce ( (total, element) => element + total, 0)
    return totalPay
}

let findEmployeeByFirstName = function(people, firstName) {
    let winner = people.find(person => person.firstName === firstName);
    return winner;
}