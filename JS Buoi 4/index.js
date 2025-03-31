// đóng gói module
// tái cấu trúc

// function, arrow function, expression function
tinhThue(50000, 0.3);

function tinhThue(tongTienLuong, phamTramThue) {
  //  nơi xử lí các hành động
  console.log(tongTienLuong);
  console.log(phamTramThue);
  const soTienThue = tongTienLuong * phamTramThue;
  console.log(soTienThue);
  //   trả về giá trị lưu trữ
  return soTienThue;
}
let tienThueKiet = tinhThue(15000, 0.1);
console.log(tienThueKiet);

let tinhDiemTrungBinh = function (diemToan, diemLy, diemHoa) {
  //  tạo 3 tham số lấy giá trị điểm toán lý hoá
  // tính toán điểm trung bình và trả về giá trị
  // gọi hàm chạy và chuyền kết quả vào
  let diemTrungBinh = (diemHoa + diemLy + diemToan) / 3;
  return diemTrungBinh.toFixed(2);
};
let diemTrungBinhLong = tinhDiemTrungBinh(7, 5, 8);
console.log(diemTrungBinhLong);

// Một chủ nhà hàng yêu cầu viết một chương trình tính toán tiền giảm giá món ăn cho khách
// Chương trình cho phép nhập vào số lượng món, giá món, tên món, và phần trăm giảm giá
// Sau khi nhận được các giá trị, thực hiện tính toán và trả về số tiền được giảm
// Chủ nhà hàng muốn nếu món ăn không được cung cấp phần trăm giảm giá, tự động hiểu là món ăn 10%
// Sau khi tạo xong chương trình, chạy thử với giá tiền 3 món bất kì

// default parameter ( tham số mặc định)
function tinhTienGiamMonAn(soLuong, giaMon, tenMon, giamGia = 0.1) {
  //  sử dụng cấu trúc điều kiện để kiểm tra
  // if (!giamGia) {
  //   // sử lí khi giảm giá không được đưa vào
  // giamGia = 0.1;
  // }
  let tongSoTien = soLuong * giaMon;
  let soTienDuocGiam = tongSoTien * giamGia;
  return soTienDuocGiam;
}

tinhTienGiamMonAn(2, 50000, "Bò Kho", 0.3);
tinhTienGiamMonAn(5, 10000, "Bánh plan", 0.3);
tinhTienGiamMonAn(4, 100, "Hủ Tíu", 0.3);

// string template (E6) ==> ``
// default parameter (ES6) ==>
// arrow function (ES6)1
// 200000
// let tinhTongTienHang = (soLuong) => {
//   return soLuong * 200000;
// };
// tinhTongTienHang();
let tinhTongTienHang = (soLuong) => soLuong * 2000000;
// let tinhTongTienHang = (soLuong) => soLuong * 2000000

tinhTongTienHang(5);

// Bar : Khách : VIP || Vãng lai
//  Tổng số tiền sử dụng dịch vụ
//  số lượng khách đi trên 5 người ==> 30%
//  số lượng khách đi từ 2 đến 5 người ==> 20%
// ít hơn giảm 10%
// Khách vip được giảm thêm 10% khách vãng lai giảm 5%
// hiển thị thông tin số tiền thanh toán ra giao diện ( lưu ý số tiền hiển thị theo đơn vị tiền tệ VND)

document.getElementById("tinhTien").onclick = (event) => {
  // event.target.classList.add("mt-5")
  let loaiKhach = document.getElementById("loaiKhach").value; // "a", "b" "c" ?
  let soNguoi = document.getElementById("soNguoi").value * 1;
  let tongSoTien = document.getElementById("tongSoTien").value * 1;
  let phamTramGiaGiaSoNguoi;
  if (soNguoi > 5) {
    phamTramGiaGiaSoNguoi = 0.3;
  } else if (soNguoi >= 2 && soNguoi <= 5) {
    phamTramGiaGiaSoNguoi = 0.2;
  } else {
    phamTramGiaGiaSoNguoi = 0.1;
  }

  //  thực hiện kiểm tra, nếu như phamTramGiamGiaSoNguoi không có ==> ngưng hàm
  if (!phamTramGiaGiaSoNguoi) {
    return;
  }

  let phamTramGiamGiaLoaiKhach =
    loaiKhach == "vip" ? 0.1 : loaiKhach == "vanglai" ? 0.05 : null;
  let tienSauGiamGia =
    tongSoTien -
    tongSoTien * (phamTramGiamGiaLoaiKhach + phamTramGiaGiaSoNguoi);
  document.getElementById(
    "ketQua"
  ).innerHTML = `Tổng số tiền sau khi giảm giá của quý khách là ${tienSauGiamGia.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
  //   100000
  //  20% 20000
  //  10% 10000
};
//  Callback function
// Tính điểm trung bình ==> tính toán ra điểm trung bình
function tinhDiem(diemA, diemB, callback) {
  let ketQua = (diemA + diemB) / 2;
  if (callback) {
    callback(ketQua);
  }
}

function hienthiDiem(diem) {
  console.log(`Chuc mung ban dat duoc ${diem}`);
}

function xetKetQua(diem) {
  console.log(
    `Ket qua diem cua ban la ${diem} va thong bao ban da ${
      diem >= 5 ? "Dau" : "Rot"
    }`
  );
}

tinhDiem(5, 6, xetKetQua);

// While, do...while, for
// 1 Biến bước nhảy
// 2 Kiểm tra điều kiện
// 3 Thao tác xử lí qua mỗi lần lặp
// 4 Tăng hoặc giảm biến bước nhảy

let index = 1;
// index phải bé hơ hoặc bằng với 10
while (index <= 10) {
  // Thao tác xử lí qua mỗi lần lặp
  console.log(index);
  //   tăng hoặc giảm biến bước nhảy
  index++;
}

// đếm xem có bao nhiêu số chia hết cho 2 từ 0 đến 85

let i = 0;
let demSoChan = 0;
while (i <= 85) {
  if (i % 2 == 0) {
    demSoChan++;
  }
  i++;
}
console.log(demSoChan);

let buocNhay = 1;
while (buocNhay <= 5) {
  if (buocNhay == 3) {
    break;
  }
  console.log(buocNhay);
  buocNhay++;
}

//  thực hiện đếm có bao nhiêu số chia hết cho 3 từ 1 đến 25
let z = 1;
let diemSo = 0;
do {
  if (z % 3 == 0) {
    diemSo++;
  }
  z++;
} while (z <= 25);

// biến bước nhảy, điều kiện, tăng giảm biến bước nhảy
// 1 * 2 * 3 * 4
let ketQua = 1;
for (let g = 1; g <= 20; g++) {
  ketQua *= g;
}
console.log(ketQua);
