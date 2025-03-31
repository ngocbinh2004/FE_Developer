// Array
let tenKiet = "Kiệt";
// Kiệt Bình Phúc
const arrSinhVien = ["Kiệt", "Bình", "Phúc"];
//  Vị trí phần từ (index) - vị trí đầu tiên  = 0
let tencuaKiet = arrSinhVien[0]; // "Kiệt"
console.log(`Xin Chao ${tencuaKiet}`);
// Độ dài mảng (length)
const length = arrSinhVien.length; // 3
console.log(length);
const phanTuCuoiCung = arrSinhVien[length - 1];
console.log(phanTuCuoiCung);
// Thay thế một phần tử trong mảng
arrSinhVien[1] = "Nhật"; // ["Kiệt", "Nhật", "Phúc"]

// Sử dụng vòng lặp để duyệt mảng
const tienLuong = [20000, 50000, 35000, 40000];
let tongTienLuong = 0;
for (let index = 0; index < tienLuong.length - 1; index++) {
  console.log(tienLuong[index]);
  tongTienLuong += tienLuong[index];
}
console.log(tongTienLuong);

// Bài tập duyệt mảng với vòng lặp
const arrMonAn = [
  "Món Trung Há Cảo",
  "Món Việt Bánh Mì",
  "Món Trung Bò Hầm",
  "Món Việt Hoành Thánh",
];
// Thực hiện duyệt vòng lặp và kiểm tra xem trong tên các món ăn món nào chứa từ món Việt thì hiện thị lên console
for (let i = 0; i < arrMonAn.length; ) {
  let monAn = arrMonAn[i];
  if (monAn.includes("Việt")) {
    console.log(monAn);
  }
}

//  for...in - for...of
// for...in --> trả về vị trí index của từng phần tử trong mảng
let arrHocSinh = ["Quyên", "Hạ", "Lan", "Hường"];
for (let index in arrHocSinh) {
  console.log(index);
  // xoá --> index vị trí cần xoá
}
// for...of --> trả về giá trị của từng phần tử trong mảng
for (let hocSinh of arrHocSinh) {
  console.log(hocSinh);
}

// Kiểm tra độ dài của một chuỗi
let monAn = "Bò Kho"; // sẽ có bao nhiêu ký tự ?
console.log(monAn.length);
console.log(monAn[3]);

// Một số phương thức tương tác với mảng
// push (thêm vào cuối) - pop (lấy phần từ cuối) - unshift (thêm vào đầu) - shift (lấy phần tử đầu)
const arrHangXe = ["Toyota", "Honda", "Kia", "Mazda"];
arrHangXe.push("Hyundai"); // ["Toyota", "Honda", "Kia", "Mazda", "Hyundai"]
let xeHuynhDai = arrHangXe.pop(); // ["Toyota", "Honda", "Kia", "Mazda"]
arrHangXe.unshift("VinFast"); // ["VinFast", "Toyota", "Honda", "Kia", "Mazda"]
let xeVinFast = arrHangXe.shift(); // ["Toyota", "Honda", "Kia", "Mazda"]

//
const arrNhanVien = [];
document.getElementById("form-them-nhan-vien").onsubmit = function (e) {
  e.preventDefault;
  let tenNhanVien = document.getElementById("tenNhanVien").value;
  // làm thế nào để kiểm tra được tên nhân viên có nhập hay không ?
  // "" || "Ký tự" ==> false || true
  // truthy và falsy
  //   if (!tenNhanVien) {
  //     return;
  // /   }
  if (tenNhanVien.trim().length === 0) {
    // trim : loại bỏ khoảng trống đầu với cuối
    return;
  }
  arrNhanVien.push(tenNhanVien);
  console.log(arrNhanVien);

  let theCha = document.getElementById("renderNhanVien");
  let noiDung = "";
  for (let nhanVien of arrNhanVien) {
    noiDung += `<p class="bg-danger bg-opacity-75 p-3 text-white">${nhanVien}</p>`;
  }
  console.log(noiDung);
  theCha.innerHTML = noiDung;

  //   reset dữ liệu trên form sau khi lấy dữ liệu xong
  e.target.reset();
};

// Nổi bọt (bubble)

//  Phương thức reverse - splice - concat -
//
let newString = "tôi đi học"; // "cọh iđ iôt"
let stringReverse = "";
for (let i = newString.length - 1; i >= 0; i--) {
  // (console.log)newString[i]);
  stringReverse += newString[i];
}
// console.log(stringReverse);

// console.log(newString.split("").reverse().join("");

// Phương thức indexOf và lastIndexOf
const arrFood = [
  "Phở",
  "Bún",
  "Cơm chiên",
  "Bánh mì",
  "Cơm gà",
  "Cơm sườn",
  "Cơm chiên",
  "Bò Kho",
  "Bún Riêu",
  "Bánh Giò",
];
// tìm vị trí của phần tử đầu tiên trong mảng có nội dung là "Cơm chiên"
// khi tìm kiếm được phần tử đầu tiên, ngưng không duyệt mảng nữa
// let viTriMonAn = -1;
// for (let i = 0; i < arrFood.length; i++) {
//   if (arrFood[i] == "Cơm chiên") {
//     //
//     viTriMonAn = i;
//     break;
//   }
// }
// console.log(viTriMonAn);
let viTriMonAn = arrFood.indexOf("Cơm chiên");
console.log(viTriMonAn);
let viTriComChienCuoiCung = arrFood.lastIndexOf("Cơm chiên");
console.log(viTriComChienCuoiCung);

// Không dùng reverse, thực hiện đảo ngược mảng arrFood đang có
let arrFood2 = [];
// for (let i = arrFood.length - 1; i >= 0; i--){
// arrFood2.push(arrFood[i]);
// }
for (let i = 0; i < arrFood.length; i++) {
  arrFood2.unshift(arrFood[i]);
}
console.log(arrFood2);
//  Thực hiện đảo ngược mảng trên chính mảng đang có
let start = 0; // vị trí phần tử bắt đầu
let end = arrFood.length - 1; // vị trí phần tử kết thúc

while (start < end) {
  let dataStart = arrFood[start];
  arrFood[start] = arrFood[end];
  arrFood[end] = dataStart;

  start++;
  end--;
}
console.log(arrFood);

//Splice vị trí phần tử cần xoá, số lương phần tử cần xoá
let viTriComChien = arrFood.indexOf("Cơm Chiên");
if (viTriComChien != -1) {
  arrFood.splice(viTriComChien, 1);
  console.log(arrFood);
}
let arrCar = ["honda", "yamaha", "suziki", "cambri"];
// let arrCar[1] =
arrCar.splice(1, 2, "vinfast");
console.log(arrCar);

// sort
// sắp xếp theo dạng chuỗi unicode
arrFood.sort().reverse();
console.log(arrFood);

let randomNumber = [45, 3, 28, 11, 5];
randomNumber.sort((a, b) => b - a);
console.log(randomNumber);

// slice
let arrConNguoi = ["Long", "Lan", "Ha", "Quyen", "Hai"];
let arrConNguoi2 = arrConNguoi.slice(1, 4);
console.log(arrConNguoi2);

// Phương thức map
let country = ["VietNam", "Singapore", "China", "American"];
// thay đổi các phần tử bên trong mảng country bây giờ sẽ có thêm một nội dung tên là đất nước nằm phía trước
let country2 = country.map((item, index) => {
  console.log(item);
  return "dat nuoc" + item;
});
console.log(country2);

// Phương thức filter
let arrTyPhu = ["Mr Vuong 7", "Phuong Hang 4", "Elizabeth 45", "Mac Donal 26"];
// Thực hiện xử lí lọc mảng arrTyPhu và lấy ra các tỷ phú có số tiền lớn hơn 4
let arrTyPhu2 = [];
// let abc = "Mr Vuong 7";
// let bcd = abc.split(" ");
// console.log(bcd[bcd.length - 1]);
for (let i = 0; i < arrTyPhu.length; i++) {
  let tyPhu = arrTyPhu[i];
  let bcd = tyPhu.split(" ");
  let soTien = parseInt(bcd[bcd.length - 1]);
  if (soTien > 4) {
    arrTyPhu2.push(tyPhu);
  }
}
console.log(arrTyPhu2);

let newArrTyPhu = arrTyPhu.filter((tyPhu, index) => {
  return tyPhu.includes("a");
});
console.log(newArrTyPhu);

let ketQua = arrTyPhu.every((tyPhu, index) => {
  return tyPhu.includes("7");
});
console.log(ketQua);

// Find và FindIndex xoá || sửa
// phần tử tìm thấy || undifined
// vị trí của phần tử || -1
let viTriCanXoa = arrTyPhu.findIndex((item, index) => {
  // true hoặc false
  return item.includes("Mac Donal");
});
if (viTriCanXoa != -1) {
  arrTyPhu.splice(viTriCanXoa, 1);
}
console.log(arrTyPhu);

let PhanTuCanTim = arrTyPhu.findIndex((item, index) => {
  return item.includes("Elizabeth");
});
if (PhanTuCanTim) {
  console.log("Nữ hoàng" + PhanTuCanTim);
}
// For each
let soTienNo = [15000, 25000, 35000, 40000];
soTienNo.forEach(item, (index) => {
  soTienNo[index] += 10000;
  console.log(item);
});
console.log(soTienNo);
