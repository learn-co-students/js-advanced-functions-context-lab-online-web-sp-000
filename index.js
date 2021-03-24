/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }



// Your code here
// Your code here
function createEmployeeRecord(employee){
    let employeeObject = {firstName: employee[0],familyName: employee[1], title: employee[2], payPerHour: employee[3], timeInEvents: [], timeOutEvents: []}
    return employeeObject
  }
  
  
  function createEmployeeRecords(employeeRecords){
    
     return  employeeRecords.map(function(employee){

         return createEmployeeRecord(employee)
      })
  }
  
  function createTimeInEvent(time){
       const dateAndTime = time.split(' ')
       let punchIn = {type: 'TimeIn',date: dateAndTime[0], hour: parseInt(dateAndTime[1], 10)}
       this.timeInEvents.push(punchIn)
      return this
  }
  
  function createTimeOutEvent(date){
      const dateAndTime = date.split(' ')
      let punchOut = {type: 'TimeOut',date: dateAndTime[0], hour: parseInt(dateAndTime[1], 10)}
      this.timeOutEvents.push(punchOut)
      return this
  }
  

////////////////// working here
  function hoursWorkedOnDate(){
      let employee = this
      let hours = employee.timeInEvents.reduce(function(acc,currV,currentIndex){
          return acc + employee.timeOutEvents[currentIndex].hour - currV.hour 
      },0)

       hours = `${hours}`
      if(hours.length === 3){
          console.log(parseInt(hours[0]))
         return parseInt(hours[0])
      } else if(hours.length === 4){
        hours = `${hours[0]}${hours[1]}`
         console.log(parseInt(hours))
        return parseInt(hours)
      }
  }
  
  function wagesEarnedOnDate(){
      const hourPay = this.payPerHour
      let hoursWorked = hoursWorkedOnDate.call(this)
      return hourPay *  hoursWorked
   }
  
  function allWagesFor(){
      return wagesEarnedOnDate.call(this)  
  }
  
  function calculatePayroll(employee){
    
      employee.forEach(function(e){
        console.log(e.timeInEvents)
        console.log(e.timeOutEvents)
      })

      let payrole = employee.reduce(function(accumulator,currentValue){
          return allWagesFor.call(currentValue) + accumulator
      },0)
      console.log(payrole)
      return payrole
  }
  
  function findEmployeeByFirstName(employees,firstName){
   let employee =  employees.filter(function(e){
       return e.firstName === firstName
   })
    return employee[0]
  }


