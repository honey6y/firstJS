/* Cho 1 số từ 0 đến 6. Viết chương trình để in ra thứ trong tuần

number: 0 => Thứ trong tuần: Sunday
number: 1 => Thứ trong tuần: Monday
number: 2 => Thứ trong tuần: Tuesday
number: 3 => Thứ trong tuần: Wednesday
number: 4 => Thứ trong tuần: Thursday
number: 5 => Thứ trong tuần: Friday
number: 6 => Thứ trong tuần: Saturday
 */

var dayOfWeek = 7;

switch (dayOfWeek) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;

    default:
        console.log('khong phai ngay trong tuan');
        break;
}