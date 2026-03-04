/* 
DOM: document object model (mô hình tài liệu dạng ĐỐI TƯỢNG)
AI TẠO RA DOM?
    Khi trang web được tải lên sẽ tạo ra mô hình cây DOM
    GIÚP: 
        + thêm, sửa, xóa các phần tử HTML
        + thêm, sửa, xóa các thuộc tính của HTML
        + tạo sự kiện trong tương tác với giao diện (click, hover, submit....)

    ĐỐI TƯỢNG THỰC TẾ: 
        THUỘC TÍNH
        PHƯƠNG THỨC

    CÁC THÀNH PHẦN TRONG DOM:
        + ELEMENT
            CÁC CÁCH LẤY ELEMENT:
                + lấy theo id: document.getElementById("heading") 
                    ==> trả về duy nhất đối tượng element vì id là duy nhất
                + lấy theo class: document.getElementsByClassName("title")
                    ==> trả về HTMLCollection (gần giống mảng)
                + Lấy theo tên thẻ tagName: document.getElementsByTagName("p")
                    ==> trả về HTMLCollection (gần giống mảng)
        + ATRIBUTE: thuộc tính
        + TEXT
        + EVENT
    

*/

let students = {
  name: "Dũng",
  email: "tdung@gmail.com",
  say: () => {
    console.log("Xin chào!");
  },
};

students.say();
// document.write();
// Math.random();
let getElementsByClassName = document.getElementsByClassName("title");
console.log(getElementsByClassName);
let getElementsByTagName = document.getElementsByTagName("title");
console.log(getElementsByTagName);

function login() {
  console.log("Đăng nhập");
}

function checkInput() {
  console.log("Nguyễn Tấn Dũng");
}

let elementH1 = {
};

// function đổi màu text
var flag = true;
function changeColor() {
  let elementH1 = document.getElementsByClassName("title")[0];
  if (flag) {
    // elementH1.style.color = "red";
    elementH1.id = "heading";
    flag = false;
  } else {
    elementH1.id = "heading1";
    flag = true;
  }
}

let users = {};

users.name = "Dũng";

function changeText() {
  let elementP = document.getElementById("para");
  elementP.innerText = "Lập trình DOM";

  document.getElementById("list").innerHTML = `<li>HTML</li>
      <li>CSS</li>
      <li>JS</li>`;
}
