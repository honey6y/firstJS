let str = 'Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng. Trong nhà em toàn bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng cả. Ba thường vừa cười vừa trêu em "đáng lẽ Bé Còi nhà ta phải là con trai mới đúng".'

// Hãy đổi các ‘em’ thành EM
let newStr = str.replace(/em/g,'EM');
// console.log(newStr);

// Đoạn văn trên có bao nhiêu ký tự
let count = str.length;
// console.log('doan van co so ky tu la:',count);

// Lấy ra câu “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng’’. đưa về mảng chứ từng ký tự.
let sentence = str.split('"').find((value, index) => index % 2 !== 0).split('')
// console.log(sentence);

// kiểm tra xem đoạn văn trên bắt đầu bằng “Hôm”. Nếu đúng thay thế thành “Ngày”
str = str.startsWith('Hôm') ? str.replace('Hôm', 'Ngày') : str;
console.log(str);