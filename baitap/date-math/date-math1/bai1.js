//Hãy cho biết hôm nay là thứ mấy, ngày, tháng, năm nào
let today = new Date();
console.log(today);
let dayOfTheWeek = '';
let day = today.getDay();
switch (day) {
    case 0: dayOfTheWeek = 'sunday'
    break;
    case 1: dayOfTheWeek = 'monday'
    break;
    case 2: dayOfTheWeek = 'tuesday'
    break;
    case 3: dayOfTheWeek = 'wednesday'
    break;
    case 4: dayOfTheWeek = 'thursday'
    break;
    case 5: dayOfTheWeek = 'friday'
    break;
    case 6: dayOfTheWeek = 'saturday'
}
let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
console.log(dayOfTheWeek, date, month, year);