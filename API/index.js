// CRUD (create - read - update - delete)
// Restful API ==> GET (lấy dữ liệu) ==>  POST (thêm dữ liệu) ==> PUT (chỉnh sửa) ==> DELETE (xoá)
// Pending (trạng thái đang chờ) ==> Error (trạng thái có lỗi) ==> Success (trạng thái thành công)
// status code (mã trạng thái )
// request (yêu cầu) và respone (trả về)

// Promise (lời hứa) || Async Await
// lấy dữ liệu từ Backend
async function getDataSinhVien() {
  let data = await axios({
    // method : Phương thức gọi dữ liệu
    method: "get",
    // domain + endpoint
    url: "https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
  });
  console.log(data);
}
getDataSinhVien();

let promise = new Promise((resolve, rejcet) => {
  let data = axios({
    // method : Phương thức gọi dữ liệu
    method: "get",
    // domain + endpoint
    url: "https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
  });
  //   resolve(data);
  rejcet("Có lỗi xảy ra");
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
