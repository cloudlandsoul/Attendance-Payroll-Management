// Define the User class
class User {
constructor(username, password, name, position, qualification) {
this.username = username;
this.password = password;
this.name = name;
this.position = position;
this.qualification = qualification;
this.attendance = [];
}

// Add attendance record for the user
addAttendanceRecord(date, clockIn, clockOut, location) {
this.attendance.push({
date: date,
clockIn: clockIn,
clockOut: clockOut,
location: location
});
}

// Get total hours worked for a given month
getTotalHoursWorked(month) {
let totalHours = 0;
for (let i = 0; i < this.attendance.length; i++) {
const attendanceDate = new Date(this.attendance[i].date);
if (attendanceDate.getMonth() === month) {
const clockIn = new Date(this.attendance[i].clockIn);
const clockOut = new Date(this.attendance[i].clockOut);
const hoursWorked = (clockOut - clockIn) / (1000 * 60 * 60);
totalHours += hoursWorked;
}
}
return totalHours;
}

// Calculate the salary for the user based on their total hours worked
calculateSalary(hourlyRate, month) {
const totalHours = this.getTotalHoursWorked(month);
const salary = totalHours * hourlyRate;
return salary;
}
}

// Export the User class
module.exports = User;
