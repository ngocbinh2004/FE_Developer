console.log("Hello");

// biến ( variable)
// ten bien phai co y nghia
//  moi ten deu tuan theo cau cu camel case ==> họ tên ==> hoTen
//  Đặt tên biến không chưa khoảng cách ==> họ tên ==> ho ten ==> fail
// Không đặt tên biến với từ khoá đặt biệt
//  const = hang so
let hoTenBinh = "Bình";
console.log(hoTenBinh);

let heSoLuongNhanVien = 2;
// những hằng số lưu trữ giá trị đơn lẻ sẽ viết hoa toàn bộ chữ cái

const HE_SO_LUONG = 5;
//   kieu du lieu (data type)
//  string(chuỗi) -  number(số)
// boolean(logic)
// object, array, symbol
let diaChi = "Q12";
let diemToan = 1;

// Toán tử (Operator)
//
let diemTrungBinh = (diemToan + 8 + 9) / 3;
console.log(diemTrungBinh);
let ketQua = 12 % 5;
console.log(ketQua);

// Đỏ Đen Cam Vàng ==> 1 2 3 4
// Bình Khải Kiệt Phúc Lan Vy Hạ Vinh Sang Cường
// 1 % 4 ==> 1 Đỏ
// number % 4 ==> 2 Den
// number % 4 ==> 3 Cam
// number % 4 ==> 0 Vang

// Toán tử gán
let soTienCuaKiet = 10;
// soTienCuaKiet = soTienCuaKiet + 5;
soTienCuaKiet += 10; // -= *= /= %=

// Phép tăng và phép giảm
let diemCuaBinh = 6;
diemCuaBinh++;
console.log(diemCuaBinh);

let ketQua2 = ++diemCuaBinh + soTienCuaKiet + diemTrungBinh++ + diemCuaBinh; //
// 7 + 15 + 7 + 8
let diemLy = 5;
let diemSinh = 9;
let diemHoa = 10;

let ketQua3 = ++diemLy - 3 + diemHoa-- + diemSinh * 2 - diemLy;
// 6 - 3 + 9 + 9 * 2 - 5 = 25

console.log(ketQua3);

document.title = "Siuu";
let theH1 = document.getElementById("demo");
document.getElementById("demo").innerHTML = "CR7";
let noiDungTheH1 = document.getElementById("demo").innerHTML;
console.log(noiDungTheH1);
theH1.style.backgroundColor = "red";

let theDemoContent = document.querySelector(".demo-content");
document.querySelector(".demo-content").style.backgroundColor = "green";
document.querySelector(".content-item").style.height = "50vh";
console.log(theDemoContent.querySelector("#demo2"));

// sự kiện trong javascript
document.getElementById("btnDangNhap").onclick = function () {
  console.log("Toi da click vào nút button");
  //   Dom tới thẻ input và lấy dữ liệu
  let taiKhoan = document.getElementById("txt-taiKhoan").value;
  console.log(taiKhoan);
  let matKhau = document.getElementById("txt-matKhau").value;
  console.log(matKhau);
};

document.getElementById("btnEye").addEventListener("click", function () {
  document.querySelector("input[name='matKhau']").type = "text";
});

let theHinhAnh = document.getElementById("theHinhAnh");
theHinhAnh.onmousemove = function () {
  console.log("con tro chuot da di chuyen toi");
};
theHinhAnh.onmouseenter = function () {
  console.log("cchuot di vao hinh anh");
};
theHinhAnh.onmouseleave = function () {
  console.log("chuot vua di ra khoi");
};

document.querySelector(".btn-primary").onclick = function () {
  // className || classList
  //   document.queSelector("body").classlist.toggle("dark")
  document.querySelector(".demo-noidung").className += " text-center";
};

// chuoi html | createElement
// <div>Hello</div>
document.getElementById("container-demo").innerHTML = "<div>Hello</div>";

// chuoi html | createElement
// <div>Hello</div>
let diemThi = 9;
document.getElementById("container-demo").innerHTML += ``;

// tao bien de luu the
let theImg = document.createElement("img");

// Ghi chú bài tập tính lương nhân viên
// 1. Tạo một sự kiện click cho nút tính toán
// 2. Lấy tất cả dữ liệu người dùng có trên các input và tạo biến nhận giá trị
// 3. Lương mỗi giờ của nhân viên là 200k
// 4. thực hiện tính toán : lấy lương mỗi giờ * số giờ làm - số giờ nghỉ * hệ số lương
// 5. Hiển thị kết quả lên giao diện thông qua thẻ div có id ketQua
// Nhân viên bình có tổng tiền lương là: vnd
document.getElementById("btnTinhToan").onclick = function () {
  // 1. Lấy thông tin từ input
  let hoTen = document.getElementById("hoTen").value;
  let soGioLam = Number(document.getElementById("soGioLam").value);
  let soGioNghi = Number(document.getElementById("soGioNghi").value);
  let heSoLuong = Number(document.getElementById("chucVu").value);

  // 2. Khai báo lương mỗi giờ
  const LUONG_MOI_GIO = 200000;

  // 3. Tính toán lương
  let tongLuong = (soGioLam - soGioNghi) * LUONG_MOI_GIO * heSoLuong;

  // 4. Hiển thị kết quả ra giao diện
  document.getElementById("ketQua").innerHTML =
    `Nhân viên ${hoTen} có tổng tiền lương là: ` +
    tongLuong.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
};
