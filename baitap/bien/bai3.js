console.log('Bai 3');
var user = {
	ten: 'tung',
	tuoi: 20,
	banBe:['vy','tung','tuan'],
	diaChi:{
    tinh: 'HCM',
    quan:'Q1'
    }
};
diaChi = user.diaChi;
banBe = user.banBe;
console.log('a, array ban be:', user['banBe']);
console.log('b, nguoi ban cuoi cung ten la:', banBe[banBe.length-1]);
console.log('c, dia chi cua user la:', diaChi);
var gioiThieu = `ten toi la: ${user.ten},
toi: ${user.tuoi} tuoi
toi o: ${diaChi.quan} tinh ${diaChi.tinh}
`;
console.log(gioiThieu);
diaChi.duong = 'Nguyen Tuan';
banBe[banBe.length] = 'Thai';
banBe.splice(1, 0, 'Tien', 'Dat');
console.log('f, thong tin user sau khi thay doi:', user);
banBe.sort();
console.log('f, thong tin ban be sau khi sap xep:', banBe);