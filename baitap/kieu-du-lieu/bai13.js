var data_ex2 = [ 'a', 3, '2']

// Nếu ta ‘Cộng, trừ, nhân, chia’ 1 số với các ký tự trong data_ex2 thì điều gì sẽ xảy ra (liệt kê hết tất cả trường hợp).

// var test = 2;
// test = test + data_ex2[0];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);
// var test = 2;
// test = test + data_ex2[1];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);
// var test = 2;
// test = test + data_ex2[2];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);

// var test = 2;
// test = test - data_ex2[0];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);
// var test = 2;
// test = test - data_ex2[1];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);
// var test = 2;
// test = test - data_ex2[2];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);

// var test = 2;
// test = test * data_ex2[0];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);
// var test = 2;
// test = test * data_ex2[1];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);
// var test = 2;
// test = test * data_ex2[2];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);

// var test = 2;
// test = test / data_ex2[0];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);
// var test = 2;
// test = test / data_ex2[1];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);
// var test = 2;
// test = test / data_ex2[2];
// console.log(test,'\n','kieu du lieu cua test la:', typeof test);


function testAdd(x) {
    for (var i in x) {
        let y = 2;
        y += x[i]
        console.log(y, 'kieu du lieu cua y la:', typeof(y));
    }
}
// testAdd(data_ex2);

// number + number ra number
// number + string sẽ ra string có nội dung ghép của number và string

function testSubtract(x) {
    for (var i in x) {
        let y = 2;
        y -= x[i]
        console.log(y, 'kieu du lieu cua y la:', typeof(y));
    }
}
// testSubtract(data_ex2);

// tất cả đều thành kiểu dữ liệu number
// ký tự dạng số thì trừ bình thường
// ký tự dạng chữ thì chuyển thành NaN

function testMultiplication(x) {
    for (var i in x) {
        let y = 2;
        y *= x[i]
        console.log(y, 'kieu du lieu cua y la:', typeof(y));
    }
}
// testMultiplication(data_ex2)

// tất cả đều thành kiểu dữ liệu number
// ký tự dạng số thì nhân bình thường
// ký tự dạng chữ thì chuyển thành NaN

function testDivision(x) {
    for (var i in x) {
        let y = 2;
        y /= x[i]
        console.log(y, 'kieu du lieu cua y la:', typeof(y));
    }
}
// testDivision(data_ex2)

// tất cả đều thành kiểu dữ liệu number
// ký tự dạng số thì chia bình thường
// ký tự dạng chữ thì chuyển thành NaN

// var number = 5;
// console.log(number++);