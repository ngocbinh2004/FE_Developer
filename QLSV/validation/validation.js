// Kiểm tra không cho phép bỏ trống
// Kiểm tra theo email
// kiểm tra password
// kiểm tra độ dài
// kiểm tra điểm trong khoảng từ 0 đến 10

function checkEmptyValue(value, spanNoti) {
  // value ==> "abcsd" || ""
  // spanNoti la DOM toi the span dung thong bao loi
  if (value) {
    console.log("Co noi dung");
    spanNoti.innerHTML = "";
    return true;
  } else {
    console.log("Khong co noi dung");
    spanNoti.innerHTML = "Vui long khong bo trong";
    return false;
  }
}

// chuỗi regex
function checkEmailValue(value, spanNoti) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // test ==> true || false
  let checkEmail = emailRegex.test(value); // true hoac false
  if (checkEmail) {
    spanNoti.innerHTML = "";
    return true;
  } else {
    spanNoti.innerHTML = "Email không đúng định dạng";
    return false;
  }
}

// Mật khẩu có chứa 1 ký tự viết hoa và chữ cái đặc biệt
// Phuongly19@
// phuongly (không hợp lệ)

function checkPaswordValue(value, spanNoti) {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let checkPasword = passwordRegex.test(value);
  if (checkPasword) {
    spanNoti.innerHTML = "";
    return true;
  } else {
    spanNoti.innerHTML =
      "Mat khau co it nhat 1 ky tu viet hoa, mot chu thuong ";
    return false;
  }
}

function checkLengthValue(value, spanNoti, min, max) {
  let LengthValue = value.length; // tong so luong ky tu
  if (LengthValue >= min && LengthValue <= max) {
    // dung
  } else {
    // sai
  }
}

function checkScoreValue(value, spanNoti) {
  // 0--> 10
  if (value >= 0 && value <= 10) {
    // dung
  } else {
    // sai
  }
}
