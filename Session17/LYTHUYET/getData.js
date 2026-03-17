/* 
LẤY DỮ LIỆU
localStorage.getItem("TÊN_KEY");
đối với mảng hoặc obj khi lấy về PHẢI chuyển từ JSON sang dạng ban đầu
JSON.parse(GIÁ_TRỊ_LẤY_VỂ);

*********************
XÓA DỮ LIỆU
1. Xóa từng phần
    localStorage.removeItem("TÊN_KEY");
2. Xóa tất cả
    localstorage.clear();
*/

let age = localStorage.getItem("age");
console.log("age", age);


let name = localStorage.getItem("fullname");
console.log("fullname", name);

let products = JSON.parse(localStorage.getItem("products"));
console.log("products", products);

localStorage.removeItem("age");
localStorage.removeItem("fullname");

