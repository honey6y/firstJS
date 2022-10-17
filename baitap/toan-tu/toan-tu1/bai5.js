// Khai báo một  biến diem với  giá trị số  bất kỳ
// Nếu diem < 0 thì in ra “ không hợp lệ “ 
// Nếu  0 < =  diem  <  5 in ra  “ kém “ 
// Nếu 5 < = diem < 6.5 in ra “ Trung bình” 
// Nếu 6.5 < =  diem  < 8 thì in ra “ Khá” 
// Nếu 8 < =  diem < = 10 thì in ra “Giỏi” 
// Trường hợp còn lại  in ra “ Không hợp lệ “  

var diem = 8;

if (diem < 0 || diem > 10) {
    console.log('không hợp lệ');
}
else if ( diem < 5) {
    console.log('kém');
}
else if (diem < 6.5) {
    console.log('Trung bình');
}
else if (diem < 8) {
    console.log('Khá');
}
else console.log('Giỏi');

