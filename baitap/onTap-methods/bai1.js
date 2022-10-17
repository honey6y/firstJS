let listUser = [
    {username: 'kienlinh', password: 'test123', email: 'kienlinh@gmail.com'},
    {username: 'thaihoang', password: 'test123', email: 'thaihoang@gmail.com'},
    {username: 'minhtu', password: 'test123', email: 'minhtu@gmail.com'}
];
// a,   user dang ky tài khoản bằng email và password
//      hãy đăng ký tài khoản cho user biết

// a1,  kiểm tra sự hợp lệ của email người dùng cung cấp biết
//      mỗi email chỉ đăng ký được 1 tài khoản, 
//      email phải có dạng xxxxxx...@xxxx.xx (trước "@" phải có tối thiểu 6 ký tự, giữa "@" và dấu "." có 3 - 6 ký tự, sau dầu "." có từ 2 - 4 ký tự)

// a2   kiểm tra password hợp lệ 
//      password tối thiểu 6 ký tự
//      email không chứa password bên trong 
//      vd email thaihoang@gmail.com,   password: thaihoang là không hợp lệ 

// a3   hãy tự động tạo username cho user
//      username là các ký tự trước dấu @ trong email

let newEmail = 'ngocthai@gmail.com';
let newPassword = 'test123';

const validationEmail = emailNeedToBeCheck => {
    let checkExistEmail = false;
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i]['email'] === emailNeedToBeCheck) {
            checkExistEmail = true;
            break;
        }
    }
    if (checkExistEmail) {
        console.log('email da ton tai');
        return false;
    }
    let indexOfMark1 = emailNeedToBeCheck.indexOf('@');
    let indexOfMark2 = emailNeedToBeCheck.lastIndexOf('.');
    if (indexOfMark1 < indexOfMark2 &&
        (emailNeedToBeCheck.slice(0, indexOfMark1).length) >= 6 &&
        emailNeedToBeCheck.slice(indexOfMark1, indexOfMark2).length >= 4 &&
        emailNeedToBeCheck.slice(indexOfMark1, indexOfMark2).length <= 7 &&
        emailNeedToBeCheck.slice(indexOfMark2).length >= 3 &&
        emailNeedToBeCheck.slice(indexOfMark2).length <= 5
    ) {
        return emailNeedToBeCheck.indexOf('@') === emailNeedToBeCheck.lastIndexOf('@')
    } else {
        return false;
    }
}
// validationEmail(newEmail)
// console.log(validationEmail(newEmail));

const validationPass = (passNeedToBeCheck, emailToCompare) => {
    if (passNeedToBeCheck.length >= 6 && !emailToCompare.includes(passNeedToBeCheck)) {
        return true;
    } else {
        return false;
    }
}
// console.log(validationPass(newPassword, newEmail));

const genUserName = emailRegister => emailRegister.slice(0, emailRegister.indexOf('@'));

// console.log(listUser);

const addUser = (userData, emailRegister, passwordRegister) => {
    if (validationEmail(emailRegister) && validationPass(passwordRegister, emailRegister)) {
        userData.push({username: genUserName(emailRegister), password: passwordRegister, email: emailRegister})
    }
    return userData;
}
addUser(listUser, newEmail, newPassword);
// console.log(listUser);

// b    user thực hiện đăng nhập bằng email, password
//      kiểm tra xem email, password nhập vào có khớp hay không
//      nếu nhập sai email báo sai email
//      nếu đúng email, sai pass báo sai pass
let loginEmail = 'thaihoang@gmail.com';
let loginPass = 'test123';
const login = (emailToLogin, passwordToLogin) => {
    let passCheck = false;
    let emailExist = false;
    let checkIndexUser = 0;
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i]['email'] === emailToLogin && listUser[i]['password'] === passwordToLogin) {
            passCheck = true;
            checkIndexUser = i;
            break;
        } else if (listUser[i]['email'] === emailToLogin) {
            emailExist = true;
            if (!listUser[i]['checkLogin']) {
                listUser[i]['checkLogin'] = 1;
            } else {
                listUser[i]['checkLogin']++;
            }

            if (listUser[i]['checkLogin'] === 3) {
                let blockDate = new Date();
                blockDate.setDate(blockDate.getDate() + 1)
                listUser[i]['blockDate'] = blockDate.toDateString();
            }
        }
    }
    if (passCheck && (!listUser[checkIndexUser]['checkLogin'] || listUser[checkIndexUser]['checkLogin'] < 3)) {
        console.log('dang nhap thanh cong');
        if (listUser[checkIndexUser]['checkLogin']) {
            delete listUser[checkIndexUser]['checkLogin'];
        }
        if (listUser[checkIndexUser]['blockDate']) {
            delete listUser[checkIndexUser]['blockDate'];
        }
        return true;
    } else if (passCheck) {
        console.log(`tai khoan bi khoa dang nhap den ${listUser[checkIndexUser]['blockDate']}`);
    }
    else if (emailExist) {
        console.log('sai mat khau');
        return false;
    } else {
        console.log('sai email');
    }
}
login(loginEmail, 'test1234')
login(loginEmail, 'test1234')
login(loginEmail, 'test1234')

login(loginEmail, loginPass)
console.log(listUser[1]);
// console.log(listUser);

// c    user thực hiện đổi password phải nhập lại password cũ và password mới
//      nếu nhập đúng password cũ thì mới sửa password
//      password mới tối thiểu 6 ký tự
//      email không chứa password mới bên trong
//      password cũ không chứa password mới 

const changePassword = (registedEmail, currentPassword, newPassword) => {
    let checkExistEmail = false;
    let checkIndexUser = 0;
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i]['email'] === registedEmail) {
            checkExistEmail = true;
            checkIndexUser = i;
            break;
        }
    }
    if (!checkExistEmail) {
        console.log('khong ton tai nguoi dung nay');
    } else if (listUser[checkIndexUser]['password'] !== currentPassword) {
        console.log('mat khau khong dung');
    } else if (!validationPass(newPassword, registedEmail) || currentPassword.includes(newPassword)) {
        console.log(`password mới tối thiểu 6 ký tự
email không chứa password mới bên trong
password cũ không chứa password mới `);
    } else {
        listUser[checkIndexUser]['password'] = newPassword;
        console.log('doi mat khau thanh cong');
    }
}

// changePassword('kienlinh@gmail.com', 'test123', 'test12345678')
// console.log(listUser);



// function User (userName, password, email) {
//     this.username = userName;
//     this.password = password;
//     this.email = email;
// }
// let arrTest = [];
// arrTest[0] = new User(genUserName(newEmail), newPassword, newEmail);
// User.prototype.changePassword = function (currentPassword, newPassword) {
//     let check = false;
//     if (currentPassword === this.password) {
//         check = true;
//     }
//     if (!check) {
//         console.log('mat khau nhap vao khong dung');
//         return false;
//     } else if (validationPass(newPassword, this.email) && !this.password.includes(newPassword)) {
//         this.password = newPassword;
//         console.log('thay doi mat khau thanh cong');
//         return this.password;
//     } else {
//         console.log(`password mới tối thiểu 6 ký tự
// email không chứa password mới bên trong
// password cũ không chứa password mới `);
// //         return false;
// //     }
// // }

// // arrTest[0].changePassword(newPassword, '1234567890');

// d    user đăng nhập sai 3 lần sẽ bị chặn đăng nhập trong 1 ngày
//      hãy thêm thời điểm kết thúc chặn đăng nhập vào user (blockDate)
//      user bị chặn đăng nhập thì không thể đăng nhập dù nhập đúng email, pass (trả thông báo bị chặn đăng nhập đến blockDate)

