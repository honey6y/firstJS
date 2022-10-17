let sinhNhat = '10/15/2000'
//a, năm nay bao nhiêu tuổi
let dateOfBirth = new Date(sinhNhat);
let today = new Date();
let age = today.getFullYear() - dateOfBirth.getFullYear();
if (today.getMonth() < dateOfBirth.getMonth() || (today.getMonth() === dateOfBirth.getMonth() && today.getDate() < dateOfBirth.getDate()))
age--;
// console.log(age);

//b, Ngày sinh nhật tiếp theo vào thời điểm nào?
let nextBirthDay;
if (today.getMonth() < dateOfBirth.getMonth() || (today.getMonth() === dateOfBirth.getMonth() && today.getDate() <= dateOfBirth.getDate())) {
    nextBirthDay = new Date(today.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate());
} else {
    nextBirthDay = new Date(today.getFullYear() + 1, dateOfBirth.getMonth(), dateOfBirth.getDate());
}
console.log(nextBirthDay);

//c, Mừng thọ 83 tuổi là vào ngày tháng năm nào?
let eightyThreeBirthDay = new Date(dateOfBirth.getFullYear() + 83, dateOfBirth.getMonth(), dateOfBirth.getDate());
// console.log(eightyThreeBirthDay.toString());
