// Khái báo biến sanPham là số lượng sản phẩm mà người mua nhập vào 
// Tính tiền Hàng  bằng toán tử 3 ngôi biết 
// * Nếu mua lẻ  1 đên 20 sản phẩm  giá  10000/ sản phẩm
// * Nếu mua  > 20 sản phẩm thì giá là 8000/ sản phẩm 
// * Nếu mua > 50  sản phẩm thì giá là 7000/ sản phẩm 
// * Nếu mua > = 100 sản phẩm thì giá là 6000/ sản phẩm .  

var sanPham = 30;
var price = 0;

price = 100 <= sanPham ? 6000 : sanPham > 50 ? 7000 : sanPham > 20 ? 8000 : 10000 ;

var total = 0;
total = sanPham * price;

console.log('tổng tiền hàng là:', total);