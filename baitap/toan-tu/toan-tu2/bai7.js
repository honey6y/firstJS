/* cho object user = {
    ten: ‘tung’,
    tuoi: 20
}


1.  hãy in ra tên và tuổi của user
2.  hãy thêm cho user họ là ‘nguyễn’
3. hãy thay đổi tuổi thành 30 */

var user = {
    ten: 'tung',
    tuoi: 20
}
console.log(`user ten: ${user.ten}
tuoi: ${user.tuoi}`);
user['ho'] = 'Nguyen';
user.tuoi = 30;
console.log(user);
// z = {
//     Asf:46,
//     sage:46,
//     fdfds:58,
//   };
//   z["619"] = 48;
//   console.log(z);