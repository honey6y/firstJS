// Cho Array sau : 
var arr2= ['Lâm','Hải', 'Huy', 'Anh', 'Duy'] ;
// a.	sử dụng console.log in ra số lượng phần tử có trong Array
// b.	Truy vấn phần tử đầu và phần tử cuối của Array trên và  sử dụng console.log in ra kết quả . 
// c.	Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
// sử dụng console.log in ra kết quả . 
// d.	Chỉnh sửa( ghi đè )  phần tử có  thứ tự là 4 thành “ Thái “ .   
// sử dụng console.log in ra kết quả 


// console.log('a, so luong phan tu co trong array la:', arr2.length);
// console.log('b, phan tu dau la:', arr2[0], '\n','phan tu cuoi la:', arr2[arr2.length-1]);
var intermediary = arr2[0];
arr2[0] = arr2[arr2.length-1];
arr2[arr2.length-1] = intermediary;
// console.log('ket qua sau khi hoan doi la:', arr2);
arr2[3] = 'Thai';
// console.log('phan tu thu 4 sau khi sua la:', arr2[3]);