// object (đối tượng)
let sinhVienKiet = {
  hoTen: "Kiệt",
  namSinh: 2000,
  gioiTinh: "Nam",
  hienThiThongTin: function () {
    // con trỏ this ==>
    console.log(`Sinh viên ${this.hoTen} có năm sinh ${this.namSinh}`);
  },
};
// key - value
console.log(sinhVienKiet.hoTen);
// "hoTen" || "namSinh" || "gioiTinh"
let data = "hoTen";
console.log(sinhVienKiet["data"]);
sinhVienKiet.hienThiThongTin();
//
sinhVienKiet.namSinh = 2004;
sinhVienKiet["hoTen"] = "Quach Tuan Kiet";
sinhVienKiet["diaChi"] = "Q.GV";
console.log(sinhVienKiet);

// Tạo một sự kiện click dành cho nút thêm thông tin
// Lấy dữ liệu từ 4 input
// Tạo object chứa dữ liệu người dùng
// thêm object này vào mảng arrSinhVien
let arrSinhVien = [];

document.querySelector(".btn-dark").onclick = function () {
  let sinhVien = {};
  //   let hoTen = document.getElementById("hoTen").value;
  //   let diemToan = document.getElementById("diemToan").value * 1;
  //   let diemLy = document.getElementById("diemLy").value * 1;
  //   let diemHoa = document.getElementById("diemHoa").value * 1;
  //   sinhVien.hoTen = hoTen;
  //   sinhVien.diemToan = diemToan;
  //   sinhVien.diemLy = diemLy;
  //   sinhVien.diemHoa = diemHoa;
  //   console.log(sinhVien);
  //   arrSinhVien.push(sinhVien);

  // input, textarea;
  // arr sẽ được trả về khi sử dụng query selector All
  let arrField = document.querySelector("#baiTap1 input");
  console.log(arrField);
  for (let field of arrField) {
    let { value, id } = field;
    sinhVien[id] = value;
  }
  arrSinhVien.push(sinhVien);
  // Sử dụng dữ liệu đang có bên trong arrSinhVien để render lên giao diện
  // Chạy vòng lặp để tạo chuỗi html
  // tr 5 td
  // sau khi dùng vòng lặp chuỗi html xong, sẽ DOM tới tbody và dùng innerHTML đưa lên giao diện
  let content = "";
  arrSinhVien.forEach((item, index) => {
    let { hoTen, diemToan, diemLy, diemHoa } = item;
    content += `
        <tr>
    <td>${index + 1}</td>
    <td>${hoTen}</td>
    <td>${diemToan}</td>
    <td>${diemLy}</td>
    <td>${diemHoa}</td>
    </tr>
    `;
  });
  document.querySelector("#tbody").innerHTML = content;
};

// Phương thức về object trong ES6
let objectA = {
  ten: "Lan",
  tuoi: 15,
};
let objectB = objectA;
let objectC = {
  ten: "Lan",
  tuoi: 15,
};

objectB.ten = "Hường";
console.log(objectA);

// Object.assign
// Một người cho và một người nhận
let objectD = {};
Object.assign(objectD, objectA);
console.log(objectD == objectA);
objectD.ten = "Cr7";
console.log(objectA);

// Spread operator
// array || funtion
console.log(typeof []);
let arrXeHoi = ["Honda", "yamaha"];
let arrXehoi2 = arrXeHoi;
arrXehoi2[0] = "Suzuki";

let objectE = { ...objectA, ten: "Bình" };
console.log(objectE);

// Destructuring (ES6)
let monAn = {
  tenMon: "mi xao",
  giaTien: 25000,
};
let tenMon = monAn.tenMon;
let { giaTien, tenMon: tenMonAn } = monAn;
console.log(giaTien);
console.log(tenMonAn);

// Object literal (ES6)
let tenXeHoi = "Mazda";
let xeHoi = {
  namSanXuat: 2000,
  tenXeHoi,
};

// Bài tập thực hành loại bỏ các giá trị trùng lặp
let arrNumber = [4, 54, 25, 4, 17, 26, 25, 33, 87];
// Xử lí loại bỏ các phần tử trùng lặp trong mảng
let checkTrungLap = {};
//undifined
arrNumber.forEach((item, index) => {
  checkTrungLap[item] = true;
  if (checkTrungLap[item]) {
    arrNumber.splice(index, 1);
  } else {
    checkTrungLap[item] = true;
  }
});

// console.log(arrNumber);
// (i = 0), (item = 4);
// z = 1;
// for (let i = 0; i < arrNumber.length; i++) {
//   for (let z = i + 1; z < arrNumber.length; z++) {
//     if (arrNumber[z] === arrNumber[i]) {
//       arrNumber.splice(z, 1);
//     }
//   }
// }
// console.log(arrNumber);

// Rest parameter
function tinhDiem(tenNguoiDung, ...arrDiem) {
  console.log(arrDiem);
  let tongDiem = 0;
  arrDiem.forEach((item, index) => {
    tongDiem += item;
  });
  return tongDiem / arrDiem.length;
}

// 3,4,7,8,1
tinhDiem("Lan", 3, 4, 7, 8, 1);
// 9,5
tinhDiem(9, 5);
