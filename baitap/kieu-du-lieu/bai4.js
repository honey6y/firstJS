// Cho array sau  : 
var arr =
[1,2,'Nam',"Hải",5,8, "Huy",3,6,"Nấm"] ;

// a.	Truy vấn đến các phần tử có vị trí index (vị trí )là 0 ; 3 ;5 và in chúng ra bằng console.log . 
// b.	Ghi đè phần tử có vị trí là 2 ,thành tên của bạn . và truy vấn và in kết quả ra bằng console.log . 
// c.	
// d.	Ghi đè phần tử có  thứ tự là 2 , thành số 100 . và truy vấn và in kết quả ra bằng console.log . 
// e.	 truy vấn phần tử cuối cùng và đầu tiên của Array và  sử dụng console.log in ra kết quả dưới dạng sau : 
// “ Phần tử đầu tiên là … 	 … “
//  điền qua sau khi truy vấn vào dấu  …  .
var index0 = arr[0];
var index3 = arr[3];
var index5 = arr[5];
// console.log('cac phan tu co vi tri 0, 3, 5 lan luot la:', index0, index3, index5);
arr[2] = 'Thai';
// console.log('b, phan tu vi tri 2 sau khi ghi de la:',arr[2]);
arr[2] = 100;
// console.log('b, phan tu vi tri 2 sau khi ghi de la:',arr[2]);
console.log('phan tu dau tien la:', arr[0], 'phan tu cuoi cung la: ',arr[arr.length-1]);
