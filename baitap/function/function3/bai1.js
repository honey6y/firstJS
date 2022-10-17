/* 
a, hay viet function đăng ký tài khoản
function có đầu vào là username và password
nếu username khác rỗng, password >= 8 ký tự thì thêm vào data

b, viet function đăng nhập có đầu vào là username và password
nếu username, password khớp với data thì thông báo thành công
nếu sai username thì báo sai username
nếu sai password thì báo sai password 

c, viet function changePass có đầu vào là username, password, newPass
nếu username, password khớp với data thì đổi password thành newPass
nếu sai username thì báo sai username
nếu sai password thì báo sai password */

var data = [
    {username: 'thanhTung', password: 'tung1234'},
    {username: 'tranganh', password: 'trang1234'},
]
function register (newUserName, newPassword) {
    if (newUserName !== '' && newPassword.length >= 8) {
        let newUser = {username: newUserName, password: newPassword}
        data.push(newUser);
    }
}
var userThai = 'NgocThai';
var passThai = 'Thai1234';
register(userThai, passThai);
// console.log(data);

function login (userName, password) {
    let checkSuccess = 0;
        let checkUser = 0;
        let checkPass = 0;
    //cách 2: for thằng user name trước, nếu có thì lấy object của thằng user đấy ra rồi so sánh password
    for (let x in data) {
        if (data[x]['username'] === userName && data[x]['password'] === password) {
            checkSuccess++;
            break;
        }  else if (data[x]['username'] === userName) {
            checkUser++;
            continue;
        } else if (data[x]['password'] === password) {
            checkPass++;
        }
    }
    if (checkSuccess) {
        return console.log('dang nhap thanh cong');
    } else if (checkUser) {
        return console.log('sai mat khau');
    } else if (checkPass) {
        return console.log('sai ten tai khoan');
    } else {
        return console.log('sai ten tai khoan va mat khau');
    }
}
var userTest = '111111'
var passTest = '12345678'

login(userThai, passThai);

function changePass (userName, oldPass, newPass) {
    let checkSuccess = 0;
    let checkUser = 0;
    let checkPass = 0;
    for (let x in data) {
        if (data[x]['username'] === userName && data[x]['password'] === oldPass) {
            data[x]['password'] = newPass;
            checkSuccess++;
            break;
        }  else if (data[x]['username'] === userName) {
            checkUser++;
            continue;
        } else if (data[x]['password'] === oldPass) {
            checkPass++;
        }
    }
    if (checkSuccess) {
        return console.log('doi password thanh cong');
    } else if (checkUser) {
        return console.log('sai mat khau');
    } else if (checkPass) {
        return console.log('sai tai khoan');
    } else {
        return console.log('sai ten tai khoan va mat khau');
    }
}
var newPassTest = 'Thai5678'
// changePass(userTest, passTest, newPassTest);
// console.log(data);