// cấu trúc điều kiện
//  kiểu dữ liệu boolean
// toán tử logic (==,===, !=, !==)
// Toán tử so sánh (==)
let diemToan = 9;
let diemVan = "9";
console.log(diemToan == diemVan);
// toán tử so sánh kiểu dữ liệu và giá trị
console.log(diemToan === diemVan);

// Be id ==> number (id ==idHTML)
let diemTong1 = (45 * 12) / 21 + 5; // 90
let diemTong2 = 11 * 30 - 5 / 9; // 90
console.log(diemTong1 != diemTong2);
console.log(diemTong1 !== diemTong2);
// khác về giá trị hoặc khác kiểu dữ liệu
// "9" ==> số ? * 1 || Number()
// từ chuỗi số về số
console.log(typeof Number("9"));
console.log(typeof ("9" * 1));
console.log(+"9");
console.log(parseInt("9"));

//ép kiểu dữ liệu từ số về chuỗi
console.log(9 + "");
console.log(String(9));

// Toán tử (!,&&,||,phủ định, vàm, )
console.log(!true);
console.log(!9);
console.log(!"");

// so sanh A && so sanh B
//
let ketQua = diemToan === diemVan && hello();
// console.log(ketQua);
function hello() {
  console.log("toi la hello");
}
w;

let ketQua2 = diemToan * 14 === diemVan * 14 || diemToan > 50;
console.log(ketQua2);

//  Cấu trúc điều kiện (if,if...else,else ìf)
let diemRandom = 45 / 15;
if (diemRandom > 3) {
  // khi toán tử so sánh trả về true
  console.log("Số lớn hơn 3");
} else if (diemRandom == 3) {
  console.log("Số bang 3");
} else {
  console.log("Số nho hơn 3");
}
//

document.getElementById("btnEye").onclick = function () {
  let domInput = document.querySelector("input[name='matKhau']");
  let typeInput = domInput.type;
  console.log(typeInput);
  if (typeInput == "password") {
    domInput.type = "text";
  } else {
    domInput.type = "password";
  }
};

// Thực hiện tính toán tiền lương
// chức vụ giamDoc = 3 || truongPhong = 2 || nhanVien = 1
// số giờ làm ít hơn 50 trừ đi 3tr tiền lương
// số giờ nghỉ nhiều hơn 20 trừ đi 2tr tiền lương
// ngoài ra nếu tổng số tiền kiếm được lớn hơn 20tr thì sẽ trừ 10% tiền cho công ty
// tính toán xong hiển thị kết quả cho người dùng theo cấu trúc
// Nguyễn văn A tháng này kiếm được ....vnd
document.getElementById("btnTinhToan").onclick = function () {
    // thu thap du lieu tu cac filed
  let chucVu = document.getElementById("ChucVu").value;
  let soGioLam = document.getElementById("SoGioLam").value * 1;
  let soGioNghi = document.getElementById("SoGioNghi").value * 1;
  let hoTen = document.getElementById("hoTen").value;

//  Toán tử 3 ngôi : toán tử so sánh ? hành động 1 : hành động 2 
//   let heSoLuong = 1;
//   if (chucVu == "giamDoc") {
//     heSoLuong = 3;
//   } else if (chucVu =="truongPhong") {
//     heSoLuong = 2; 
//   } else {
//     heSoLuong = 1;
//   }

//  cấu trúc điều kiện switch case
// "thư ký"
    switch (chucVu) {
        case"giamDoc":
        // nơi thực thi các hành động 
        heSoLuong = 3;
        break;
    case "truongPhong":
        heSoLuong = 2;
        break;
        case "nhanVien":
            heSoLuong = 1;
            break;
            default:
                heSoLuong = 1;
                break;
    }
  let tongTienLuong = 200000 * soGioLam * heSoLuong;  // 200000000
//   xu li kiem tra gio lam it hon 50 thi tru tien 
if (soGioLam < 50) {
    tongTienLuong -= 30000;
  
} 
// xu li kiem tra gio nghi nhiu hon 20 thi tru tien
if (soGioNghi > 20) {
    tongTienLuong -= 20000;
}

if (tongTienLuong > 200000000) {
    tongTienLuong *= 0.9;

}
// hien thi ket qua 
document.getElementById("ketQua").innerHTML =`${hoTen}thang nay kiem duoc 
