function createEmployeeRecord(array){
    return { firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}

function  createEmployeeRecords(array2){
    return array2.map(function(e){
        return createEmployeeRecord(e)

    })

}

function createTimeInEvent(dateStamp){
    
    let clockIn = dateStamp.split(" ")
   
//    console.log("timeInEvents",dateStamp) 

   this.timeInEvents.push({
        
        type:'TimeIn',
        hour:parseInt(clockIn[1]),
        date:clockIn[0]
    })
    return this

}

function createTimeOutEvent(dateStamp){

    let clockOut = dateStamp.split(' ')
    this.timeOutEvents.push({
    type:'TimeOut',
    hour:parseInt(clockOut[1]),
    date:clockOut[0]

    })

    return this
}


function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find(e=>{
        return e.date === date 
})
    let timeOut = this.timeOutEvents.find(e=>{
        return e.date === date 
    })
        return (timeOut.hour - timeIn.hour )/ 100

}

function wagesEarnedOnDate(date){
    
    return parseFloat( hoursWorkedOnDate.call(this, date)* this.payPerHour.toString())
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

    let payable = eligibleDates.reduce(function (accum, e) {
        return accum + wagesEarnedOnDate.call(this, e)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(employees){
    return employees.reduce(function(accum,e){
        return accum + allWagesFor.call(e)
    },0)

}

function findEmployeeByFirstName(srcArray, firstName){

    let emp = srcArray.find(e=> e.firstName === firstName)
    return emp
}

