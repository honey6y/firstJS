//a, Hãy tạo ra date của ngày đầu tuần này
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDay();
let date = today.getDate()
let firstDayOfWeek = new Date(year, month, date - day);
// console.log(firstDayOfWeek.toString());

//b,Hãy tạo date của ngày cuối tuần này
let lastDayOfWeek = new Date(year, month, date - day + 6)
// console.log(lastDayOfWeek.toString());

//c,hãy tạo date của ngày đầu tháng này
let firstDayOfMonth = new Date(year, month, 1);
// console.log(firstDayOfMonth.toString());

//d,Hãy tạo date của ngày cuối tháng này
let lastDayOfMonth = new Date(year, month + 1, 0);
// console.log(lastDayOfMonth.toString());

//e,Hãy cho biết tháng này có bao nhiêu ngày
let totalDayOfMonth = lastDayOfMonth.getDate();
console.log(totalDayOfMonth);