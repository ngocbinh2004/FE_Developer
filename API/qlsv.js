const http = axios.create({
  baseURL: "https://svcy.myclass.vn/api/SinhVienApi/",
  //ms
  timeout: 30000,
});

// Them sinh vien ==> Lay du lieu tu form ==> gui du lieu cho backend ==> thong bao ==> goi du lieu toan bo sinh vien de update voi du lieu cu
// Xoa ==> id
// Hien thi du lieu ==> goi API ==> luu tru ===> hien thi
// Cap Nhat ==> goi API lay thong tin chi tiet sinh vien ==> dua du lieu len form ==> lay du lieu ve va gui cho BE ==> nhan thong bao va xu li
let domArrField = document.querySelectorAll(
  "#formQLSV input, #formQLSV select"
);
let domForm = document.getElementById("formQLSV");
function handleNotification(text, typeNoti) {
  // typeNoti ==> success ==> error
  Toastify({
    text,
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: typeNoti === "error" ? "red" : "green",
    },
    // onClick: function () {}, // Callback after click
  }).showToast();
}

async function getDataSinhVien() {
  try {
    let result = await http.get("/LayDanhSachSinhVien");
    renderDataSinhVien(result.data);
  } catch (error) {}
}
function renderDataSinhVien(arr) {
  let content = "";
  console.log(arr);
  for (let sinhVien of arr) {
    console.log(sinhVien);
    // destructuring boc' tach' cac' thuoc tinh'
    let {
      maSinhVien,
      tenSinhVien,
      email,
      soDienThoai,
      loaiSinhVien,
      diemToan,
      diemLy,
      diemHoa,
      diemRenLuyen,
    } = sinhVien;
    let diemTB = (diemToan + diemLy + diemHoa + diemRenLuyen) / 4;
    content += `
    <tr>
    <td>${maSinhVien}</td>
    <td>${tenSinhVien}</td>
    <td>${email}</td>
    <td>${soDienThoai}</td>
    <td>${loaiSinhVien}</td>
    <td>${loaiSinhVien}</td>
    <td>${diemTB}</td>
    <td>
    <button onclick="xoaSinhVien('${maSinhVien}')"  class="btn btn-danger">Xoá</button>
    <button onclick="layThongTinSinhVien('${maSinhVien}')class="btn btn-warning">Sửa</button>
    </td>
    </tr>
    `;
  }
  // Goi DOM toi tbody de dua len giao dien
  document.getElementById("Tbody").innerHTML = content;
}
getDataSinhVien();

// goi su kien submit va gan function themSinhVien
// goi va lay du lieu tu form
function themSinhVien(event) {
  event.preventDefault();
  // su dung vong lap de duyet danh sach cac input trong form

  let sinhVien = {};
  for (let field of arrField) {
    let { id, value } = field;
    //bracket notaion || do notation
    id = id === "maSV" ? "maSinhVien" : id === "tenSV" ? "tenSinhVien" : id;
    sinhVien[id] = value;
  }
  let promise = axios({
    method: "POST",
    url: "https://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
    data: sinhVien,
  });
  promise
    .then((res) => {
      console.log(res);
      getDataSinhVien();
      handleNotification(res.data, "success");
    })
    .catch((err) => {
      handleNotification("Co loi xay ra", "error");
    });
}
document.getElementById("formQLSV").onsubmit = themSinhVien;

function xoaSinhVien(mssv) {
  // thực hiện gắn hàm xoaSinhVien vào nút button và lấy mssv
  // thực hiện dùng axios để gọi API xóa sinh viên, mssv sẽ được gắn vào url (string template)
  // sau khi xóa, kiểm tra xử lí thành công hay thất bại và thông báo cho người dùng bằng toastify
  http
    .delete(`/XoaSinhVien?maSinhVien=${mssv}`)
    .then((res) => {
      console.log(res);
      getDataSinhVien();
      handleNotification(res.data, "success");
    })
    .catch((err) => {
      console.log(err);
      let errorMessage =
        err.response.status === 500
          ? "Co loi xay ra"
          : err.response.data.Message;
      handleNotification(errorMessage, "error");
      getDataSinhVien();
    });
}
function layThongTinSinhVien(mssv) {
  console.log(mssv);
  http
    .get(`/LayThongTinSinhVien?maSinhVien=${mssv}`)
    .then((res) => {
      console.log(res);
      for (let field of domArrField) {
        let { id } = field;
        id = id === "maSV" ? "maSinhVien" : id === "tenSV" ? "tenSinhVien" : id;
        field.value = res.data[id];
        if (id === "maSinhVien") {
          field.dissabled = true;
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

document.querySelector(".btn-primary").onclick = function () {
  let sinhVien = {};
  for (let field of arrField) {
    let { id, value } = field;
    //bracket notaion || do notation
    id = id === "maSV" ? "maSinhVien" : id === "tenSV" ? "tenSinhVien" : id;
    sinhVien[id] = value;
  }
  // bên trong sinh viên sẽ chứa mã sinh viên để gửi lên backend
  http
    .put(`/CapNhatThongTinSinhVien?maSinhVien=${sinhVien.maSinhVien}`, sinhvien)
    .then((res) => {
      console.log(res);
      getDataSinhVien();
      handleNotification(res.data, "success");
      document.getElementById("maSV").dissabled = false;
    })
    .catch((err) => {
      console.log(err);
      handleNotification("Co loi khi cap nhat, vui long thu lai", "error");
    });
};
