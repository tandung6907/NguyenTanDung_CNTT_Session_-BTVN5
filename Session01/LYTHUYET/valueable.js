/* 
Variable: dùng để lưu trữ dữ liệu
3 từ khóa để khai báo biến: 
    1. var: 
        + có thể khai báo lại
        + có thể gán lại giá trị
        + có hoisting và truy cập được
        + phạm vi hoạt động function
    2. const: (ES6_2015)
        + không thể khai báo lại
        + không thể gán lại
        + có hoisting nhưng không truy cập được
        + phạm vi hoạt động block scope
    3. let: (ES6_2015)
        + không thể khai báo lại
        + có thể gán lại giá trị
        + có hoisting nhưng không truy cập được
        + phạm vi hoạt động block scope
            Khai báo biến:
            + từ khóa khai báo biến
            + tên biến: 
                + viết theo tên tiếng anh 
                + tuân theo quy tắc con lạc đà camel case
                + không bắt đầu bằng số
                + tránh các từ khóa đặc biệt (let, const, var, class, ...)
            + giá trị của biến: mang giá trị thuộc một kiểu dữ liệu
*/
var fullName = "Nguyễn Tấn Dũng";
var fullName = "Nguyễn Tấn Dũng 2"; //khai báo lại
let bookName = "Harry Poster";
bookName = "Nhật ký của TanDung";
let age = 18;
let isLogin = true;

{
    var a = 6;
}

console.log(a);
