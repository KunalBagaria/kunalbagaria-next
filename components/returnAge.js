import DateDiff from 'date-diff'
let dob = new Date(2005, 3, 15)
let currentDate = new Date()
let age = new DateDiff(currentDate, dob);
export default age.years()