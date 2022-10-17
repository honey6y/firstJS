//Tạo ra ngày 20/10/3000
let strDay = '20/10/3000';
strDay = strDay.split('/').reverse().join('/');
// console.log(strDay);
let future = new Date(strDay);
// console.log(future.toString());
let futureDate = future.getDate();
let futureDay = future.getDay();
let futureMonth = future.getMonth();
let futureYear = future.getFullYear();

//a, Cách hiện tại bao nhiêu năm
let today = new Date();
let timeDistance = futureYear - today.getFullYear();
if (today.getMonth() < futureMonth) timeDistance--;
// console.log(timeDistance);

//b, hôm đó là thứ mấy
let dayOfTheWeekFuture;
switch (futureDay % 7) {
    case 0: dayOfTheWeekFuture = 'sunday'
    break;
    case 1: dayOfTheWeekFuture = 'monday'
    break;
    case 2: dayOfTheWeekFuture = 'tuesday'
    break;
    case 3: dayOfTheWeekFuture = 'wednesday'
    break;
    case 4: dayOfTheWeekFuture = 'thursday'
    break;
    case 5: dayOfTheWeekFuture = 'friday'
    break;
    case 6: dayOfTheWeekFuture = 'saturday'
}
// console.log(dayOfTheWeekFuture);

//c, sau 5 ngày thì la thứ mấy
let dayAfter5DayOfTheWeekFuture;
switch ((futureDay + 5) % 7) {
    case 0: dayAfter5DayOfTheWeekFuture = 'sunday'
    break;
    case 1: dayAfter5DayOfTheWeekFuture = 'monday'
    break;
    case 2: dayAfter5DayOfTheWeekFuture = 'tuesday'
    break;
    case 3: dayAfter5DayOfTheWeekFuture = 'wednesday'
    break;
    case 4: dayAfter5DayOfTheWeekFuture = 'thursday'
    break;
    case 5: dayAfter5DayOfTheWeekFuture = 'friday'
    break;
    case 6: dayAfter5DayOfTheWeekFuture = 'saturday'
}
// console.log(dayAfter5DayOfTheWeekFuture);