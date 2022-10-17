let bienLai = [
    {ten: 'nam', giaTri:300, diachiden: 'Han Quoc'},
    {ten: 'hieu', giaTri:180, diachiden: 'UK'},
    {ten: 'nam', giaTri:180, diachiden: 'US'},
    {ten: 'tram', giaTri:180, diachiden: 'US'},
    {ten: 'dat', giaTri:170, diachiden: 'Han Quoc'},
    {ten: 'anh', giaTri:100, diachiden: 'UK'},
    {ten: 'hieu', giaTri:180, diachiden: 'Han Quoc'},
    {ten: 'lam', giaTri:200, diachiden: 'Han Quoc'},
    {ten: 'quy', giaTri:210, diachiden: 'Canada'},
    {ten: 'diep', giaTri:100, diachiden: 'US'},
    {ten: 'huong', giaTri:100, diachiden: 'Canada'},
];

//Func có đầu vào là array, nation(quốc gia), callback
//3.1 Viết func trả về tổng số giá trị biến lai của mỗi nước
const calculateByCondition = (arrayReceipt, nation, callback) => {
    let nationReceipt = arrayReceipt.filter(item => item['diachiden'] === nation);
    return callback(nationReceipt);
}

const calReceipt = nationReceiptArray => nationReceiptArray.reduce((total, item) => total + item['giaTri'], 0)

// console.log(calculateByCondition(bienLai, 'US', calReceipt));

// 3.2 Viết Func trả về giá trị biên lại trung bình của mỗi nước
const averageReceiptNation = nationReceiptArray => nationReceiptArray.reduce((total, item, index, self) => total + item['giaTri'] / self.length, 0)
// console.log(calculateByCondition(bienLai, 'Canada', averageReceiptNation));

// 3.2 Viết func trả về biên lai có giá trị hơn 180 và là người hàn quốc
const hightReceipt = nationReceiptArray => nationReceiptArray.filter(value => value['giaTri'] > 180)
// console.log(calculateByCondition(bienLai, 'Han Quoc', hightReceipt));
