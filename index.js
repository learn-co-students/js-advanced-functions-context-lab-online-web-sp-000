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
  let [ date, hourStr ] = timestamp.split( ' ' )
  let hour = parseInt( hourStr )

  return { type, hour, date }
}

function createTimeInEvent( timeStamp ) {
  let [ date, hour ] = timeStamp.split( ' ' )
  this.timeInEvents =
    [ ...this.timeInEvents, createTimeEvent( timeStamp, TIME_IN ) ]

  return this
}

function createTimeOutEvent( timeStamp ) {
  let [ date, hour ] = timeStamp.split( ' ' )
  this.timeOutEvents.push( createTimeEvent( timeStamp, TIME_OUT ))

  return this
}

function hoursWorkedOnDate( date ) {
  let inEvent = this.timeInEvents.find( x => x.date == date )
  let outEvent = this.timeOutEvents.find( x => x.date == date )
  let hoursWorked = ( outEvent.hour - inEvent.hour ) / 100

  return hoursWorked
}

function wagesEarnedOnDate( date ) {
  return this.payPerHour * hoursWorkedOnDate.call( this, date )
}

function allWagesFor() {
  let dates = this.timeInEvents.map( function( event ) {
      return event.date
  })

  let payable = dates.reduce( function( memo, date ) {
      return memo + wagesEarnedOnDate.call( this, date )
  }.bind( this ), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}

function calculatePayroll( records ) {
  return records.reduce( function( total, record ) {
    return total += allWagesFor.call( record )
  }, 0)
}

function findEmployeeByFirstName( records, firstName ) {
  return records.find( record => record.firstName === firstName )
}
