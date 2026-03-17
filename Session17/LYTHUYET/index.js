/* 
BROWSER STRAGE:
 - Dịch vụ cho phép lưu trữ dữ liệu phía trình duyệt web
    Cung cấp 3 kiểu lưu trữ dữ liệu
        1. Local storage
            + Dung lượng lưu trữ: 5_10Mb
            1 ảnh trong máy tính: khoảng 100Kb
            + Dữ liệu khi lưu (đóng trình duyệt, tắt máy) thì dữ liệu không bị mất
        2. Session storage
            + Dung lượng lưu trữ: 5_10Mb
            + Phiên làm việc: Khi đóng trình duyệt, tắt máy thì dữ liệu bị mất
        3. Cookies
            + Có thẻ set được thời gian tồn tại

        ****************
 - CÁCH LƯU TRỮ DỮ LIỆU
 I - Lưu: localStorage.setItem(TÊN_KEY, VALUE);

 Đối với dữ liệu là mảng hoặc object khi lưu PHẢI chuyển sang định dạng JSON
 JSON.stringify(DỮ LIỆU)
*/

let fullname = "Nguyễn Tấn Dũng";
localStorage.setItem("fullname", fullname);
let age = 18;
localStorage.setItem("age", age);
let students = ["Minh", "Dũng", "Hiển"];
localStorage.setItem("students", JSON.stringify(students));

let products = [
    {id: 1, name: "sản phẩm 1"},
    {id: 2, name: "sản phẩm 2"},
    {id: 3, name: "sản phẩm 3"},
];

localStorage.setItem("products", JSON.stringify(products));