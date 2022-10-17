// Cho trước một object sau:
// ví dụ: 
var monthSalary = {
    January:    1000,
    February:    4000,
    March:      5400,
    April:      6040,
    May:        1700,
    June:       1000,
    July:       8000,
    August:     1600,
    September:  1000,
    October:    1700,
    November:   1903,
    December:   9050
}
// a.	console.log() ra tổng lương 3 tháng đầu năm.
// b.	console.log() ra lương tháng trung bình cả năm.
// c.	Thêm key lương tháng 13 và tính lại trung bình thu thập cả năm.
var count = 0;
var _3month = 0;
for (var i in monthSalary) {
  _3month += monthSalary[i];
  count++;
  if (count === 3)
  {break;}
}
// console.log('a, tong luong 3 thang dau nam la:',_3month);

var _12month = 0;
var average = 0;
for (let i in monthSalary) {
    _12month += monthSalary[i];
}
average = _12month / 12;
// console.log('b, luong trung binh ca nam la:',average);

monthSalary['thirteen_month'] = 5000;
_12month += monthSalary.thirteen_month;
average = _12month/12;
console.log('c, luong trung binh ca nam 13 thang la:', average);