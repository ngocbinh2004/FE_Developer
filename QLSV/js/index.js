// 1. Thêm sinh viên vào mảng
let arrSinhVien = [];

// Tạo sự kiện submit và tương tác tới tất cả input select lấy dữ liệu
function getDataForm(form) {
  let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select");
  let sinhVien = {};
  // arrField là mảng nên cần dùng vòng lặp xử lí
  // biến cờ (flag)
  let isValid = true;

  for (let field of arrField) {
    // destructuring
    let { value, id } = field;
    sinhVien[id] = value;
    let parentDOM = field.parentElement;
    let spanNoti = parentDOM.querySelector("span");
    let isEmpty = checkEmptyValue(value, spanNoti); // true || false
    if (!isEmpty) {
      isValid = false;
    } else {
      // data-atribute
      let validationType = field.getAttribute("data-validation-type");
      if (validationType == "email") {
        let isEmail = checkEmailValue(value, spanNoti);
        !isEmail && (isValid = false);
      } else if (validationType == "password") {
        let isPassword = checkPaswordValue(value, spanNoti);
        !isPassword && (isValid = false);
      } else if (validationType == "score") {
        cl;
        //
        let isScore = checkScoreValue(value, spanNoti);
        !isScore && (isValid = false);
      }
    }
  }

  if (isValid) {
    return sinhVien;
  }

  // console.log(sinhVien);
  // [key,value]
  // lệnh DOM tới chính thẻ form mà cần lấy dữ liệu
  // ["txtMaSV","abc"];
}
function actionWithData() {
  renderDataSinhVien();
  saveLocalStorage("arrSinhVien", arrSinhVien);
}
document.getElementById("formQLSV").onsubmit = function (event) {
  let formValue = new FormData(event.target);
  arrSinhVien.push(data);

  // reset form
  event.target.reset();
  // render dữ liệu đang có trong mảng arrSinhVien lên giao diện
  actionWithData();
};

function renderDataSinhVien(arr = arrSinhVien) {
  // arrSinhVien
  let content = "";
  for (let sinhVien of arr) {
    // destructuring
    const {
      txtMaSV,
      txtTenSV,
      txtEmail,
      txtNgaySinh,
      khSV,
      txtDiemToan,
      txtDiemLy,
      txtDiemHoa,
    } = sinhVien;
    let diemTrungBinh = (txtDiemToan * 1 + txtDiemLy * 1 + txtDiemHoa * 1) / 3;
    content += `
      <tr>
        <td>${txtMaSV}</td>
        <td>${txtTenSV}</td>
        <td>${txtEmail}</td>
        <td>${txtNgaySinh}</td>
        <td>${khSV}</td>
        <td>${diemTrungBinh.toFixed(2)}</td>
        <td>
          <button onclick="xoaSinhVien('${txtMaSV}')" class="btn btn-danger">Xoá</button>
          <button onlcick="layThongTinSinhVien"('${txtMaSV}')" class="btn btn-warning">Sửa</button>
        </td>
      </tr>
    `;
  }
  document.getElementById("tbodySinhVien").innerHTML = content;
}

function xoaSinhVien(mssv) {
  console.log(mssv);
  // splice(viTriCanXoa,1)
  // findIndex viTri || -1
  let viTriCanXoa = arrSinhVien.findIndex((item, index) => {
    return item.txtMaSV == mssv;
  });
  if (viTriCanXoa != -1) {
    arrSinhVien.splice(viTriCanXoa, 1);
    console.log(arrSinhVien);
    renderDataSinhVien();
    saveLocalStorage("arrSinhVien", arrSinhVien);
  }
}

// Chức năng sửa thông tin sinh viên
// tạo hàm lấy thông tin sinh viên (mssv)
// thực hiện sử dụng hàm find để tìm kiếm
// sau khi có dữ liệu thao tác đưa dữ liệu vào các input và select
// ngăn chặn người dùng chỉnh sửa input thông qua thuộc tính readOnly hoặc disable

function layThongTinSinhVien(mssv) {
  // Object chứa thông tin sinh viên
  let sinhVien = arrSinhVien.find((item, index) => {
    return item.txtMaSV == mssv;
  });
  // Phần tử tìm thấy || undifined
  if (sinhVien) {
    console.log(sinhVien);
    // document.getElenmentById("txtMASV").value = sinhVien.txtMaSV;
    let arrField = document.querySelectorAll(
      "#formQLSV input, #formQLSV select"
    );
    console.log(arrField);
    // for (let key in sinhVien) {
    //   console.log(key);
    // mình sẽ dùng key của object để truy xuất và đưa dữ liệu vào các input thông qua id }
    for (let field of arrField) {
      console.log(field);
      let { name } = field;
      field.value = sinhVien[name];
      if (field.name == "txtMaSV") {
        field.readOnly = true;
      }
    }
  }
}
// Viết một sự kiện click dành cho nút cập nhật
// lấy dữ liệu từ form
// dựa trên mã sinh viên đang có, tìm kiếm vị trí của phần tử đang nằm trong mảng và thay thế
// clear dữ liệu của form và loại bỏ readOnly khỏi input mã sinh viên
// lưu dữ liệu mảng mới vào localstorage
// chạy lại hàm render
document.querySelectorAll(".btn-info").onclick = function () {
  let formQLSV = document.getElementById("formQLSV");
  let sinhVien = getDataForm(formQLSV);
  // Tìm vị trí index ==> findIndex
  let viTri = arrSinhVien.findIndex((item, index) => {
    return item.txtMaSV === sinhVien.txtMaSV;
  });
  // viTri || -1
  if (viTri != -1) {
    arrSinhVien[viTri] = sinhVien;
    formQLSV.reset();
    document.getElementById("txtMaSV").readOnly = false;
    actionWithData();
  }
};

function saveLocalStorage(key, value) {
  let dataString = JSON.stringify(value);
  localStorage.setItem(key, dataString);
}

function getLocalStorage(key) {
  let dataLocal = JSON.parse(localStorage.getItem(key));
  return dataLocal;
}

// Localstorage
// setItem , getItem , removeItem
// localStorage.setItem("hoTen", "Quang Khải");
// let data1 = {
//   hoTen: "abc",
// };
// // Chuyển đổi dữ liệu object thành chuỗi JSON
// let dataString = JSON.stringify(data1);
// localStorage.setItem("sinhVien", dataString);

// let dataLocal = localStorage.getItem("arrSinhVien");
// console.log(JSON.parse(dataLocal));

// localStorage.removeItem("abc");

window.onload = function () {
  arrSinhVien = getLocalStorage("arrSinhVien")
    ? getLocalStorage("arrSinhVien")
    : [];
  console.log(arrSinhVien);
  renderDataSinhVien();
};

// Điện thoại
// dien thoai || điện thoai || ĐIỆN THOẠI
// loại bỏ hết dấu tiếng việt, chuyển đổi hết về thành chữ thường, loại bỏ khoảng trắng nằm ở đầu và cuối của chuỗi ==> dien thoai
// tên sản phẩm ==> dien thoai
// dien
document.getElementById("txtSearch").oninput = function (event) {
  let keyWordLoaiBoTiengViet = removeVietnameseTones(event.target.value)
    .toLowerCase()
    .trim();
  // let arrFieldSinhVien = [];
  // for (let sinhVien of arrSinhVien) {
  //   //txtTenSV
  //   // xử lí dữ liệu tên sinh viên
  //   let tenSinhVienConvert = removeVietnameseTones(sinhVien.txtTenSV)
  //     .toLowerCase()
  //     .trim();
  //   console.log(tenSinhVienConvert);
  //   if (tenSinhVienConvert.includes(keyWordLoaiBoTiengViet)) {
  //     console.log(sinhVien);
  //     arrFieldSinhVien.push(sinhVien);
  //   }
  // }
  let arrFieldSinhVien = arrSinhVien.filter((item, index) => {
    let tenSinhVienConvert = removeVietnameseTones(item.txtTenSV)
      .toLowerCase()
      .trim();
    return tenSinhVienConvert.includes(keyWordLoaiBoTiengViet);
  });
  renderDataSinhVien(arrFieldSinhVien);
};
