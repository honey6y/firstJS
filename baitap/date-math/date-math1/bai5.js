let phucBirthday = '26-11-1992';
let cuongBirthday= '27-11-1994';
//a,  Đổi định dạng ngày thành ‘1992-11-26’
const changeFormat = birthStr => birthStr.split('-').reverse().join('-');

phucBirthday = changeFormat(phucBirthday);
cuongBirthday = changeFormat(cuongBirthday);

//b, Quy đổi về cả 2 về object date
phucBirthday = new Date(phucBirthday);
cuongBirthday = new Date(cuongBirthday);
// console.log(phucBirthday);
// console.log(cuongBirthday);

//c, So sánh xem phuc hay cuong lớn tuổi hơn
// if (phucBirthday.getTime() < cuongBirthday.getTime()) {
//     console.log('Phuc lon tuoi hon');
// } else {
//     console.log('Cuong lon tuoi hon');
// }

//d, Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy?
phucBirthday.setDate(phucBirthday.getDate() + 100);
let newDay = phucBirthday.getDay();
let newDayOfWeek;
switch (newDay % 7) {
    case 0: newDayOfWeek = 'sunday'
    break;
    case 1: newDayOfWeek = 'monday'
    break;
    case 2: newDayOfWeek = 'tuesday'
    break;
    case 3: newDayOfWeek = 'wednesday'
    break;
    case 4: newDayOfWeek = 'thursday'
    break;
    case 5: newDayOfWeek = 'friday'
    break;
    case 6: newDayOfWeek = 'saturday'
}
let newDate = phucBirthday.getDate();
console.log(newDayOfWeek);
console.log(newDate);
