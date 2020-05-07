/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const TIME_IN = 'TimeIn'
const TIME_OUT = 'TimeOut'

function createEmployeeRecord( arr ) {
  let [ firstName, familyName, title, payPerHour ] = arr
  return {
   firstName,
   familyName,
   title,
   payPerHour,
   timeInEvents: [],
   timeOutEvents: []
  }
}

function createEmployeeRecords( arrs ) {
  return arrs.map( createEmployeeRecord )
}

function createTimeEvent( timestamp, type ) {
  let [ date, hour ] = timestamp.split( ' ' )
  return {
    date,
    hour: parseInt( hour, 10 ),
    type
  }
}

function createTimeInEvent( timeStamp ) {
  this.timeInEvents.push( createTimeEvent( timeStamp, TIME_IN ))
  return this
}

function createTimeOutEvent( timeStamp ) {
  this.timeOutEvents.push( createTimeEvent( timeStamp, TIME_OUT ))
  return this
}

function hoursWorkedOnDate( date ) {
  let inEvent = this.timeInEvents.find( x => x.date == date )
  let outEvent = this.timeOutEvents.find( x => x.date == date )

  return ( outEvent.hour - inEvent.hour ) / 100
}

function wagesEarnedOnDate( date ) {
  return this.payPerHour * hoursWorkedOnDate.call( this, date )
}

function allWagesFor() {
  let dates = this.timeInEvents.map(( event ) => event.date )

  let payable = dates.reduce(( memo, date ) => {
      return memo + wagesEarnedOnDate.call( this, date )
  }, 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}

function calculatePayroll( records ) {
  return records.reduce(( total, record ) =>
    total += allWagesFor.call( record ), 0)
}

function findEmployeeByFirstName( records, firstName ) {
  return records.find( record => record.firstName === firstName )
}
