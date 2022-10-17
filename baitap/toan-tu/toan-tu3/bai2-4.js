/* Khai báo biến tuoi với số dương bất kỳ  
Nếu tuoi < 13  in ra kết quả “Trẻ em “ 
nếu. 13 < =  tuoi < = 17 in ra kết quả “ Thiếu niên “ ,
nếu 18 < = tuoi < = 39  in ra kết quả “ Trưởng thành “ 
nếu 40 < = tuoi < = 65  in ra kết quả “ Trung niên “ 
còn lại in ra kết quả “ Già”  */

var tuoi = 70;

if (tuoi < 0)
console.log('vui long nhap so tuoi hop le!');
else if (tuoi < 13)
console.log('tre em');
else if (tuoi <= 17)
console.log('thieu nien');
else if (tuoi <= 39)
console.log('truong thanh');
else if (tuoi <=65)
console.log('trung nien');
else console.log('gia');