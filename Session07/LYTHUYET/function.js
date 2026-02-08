// function sayHello() {
//     console.log("Xin chào!");
// }
// sayHello();

// function logIn(params) {
//     console.log("Nhập email: ");
//     console.log("Mật khẩu: ");
// }
// logIn();

// const sum = function () {
//     let a = 5;
//     let b = 6
//     console.log(`Tổng ${a} và ${b} = ${a + b}`);
// }

// sum();

// const addToCart = () => { }

// let score1 = [4, 7, 5, 9];
// let score2 = [6, 7, 8, 3];
// function totalScore(param1, param2) {
//     let sum = 0;
//     for (let i = 0; i <= param1.length; i++) {
//         sum += param1[i];
//     }
//     console.log(`Kết quả là: ${sum}`);
// }
// totalScore(score1);
// totalScore(score2);

// let students = ["hoa", "thu", "lan", "ngoc"];
// function renderStudents() {
//     for (let i = 0; i < students.length; i++) {
//         document.write(`Danh sách các sinh viên là: ${students[i]}` + "<br>");
//     }
// }
// renderStudents(students);

// function checkEmail() {
//     let gmail = prompt("Mời nhập vào email đăng ký")
//     let check = gmail.includes("@");
//     if (check) {
//         console.log("Email có vẻ hợp lệ");
//     } else {
//         console.log("Email không hợp lệ");
//     }
// }

checkEmail();

function checkEmail(param) {
  if (param.includes("@")) {
    return true;
  }
  return false;
}

let email = prompt("Mời nhập email: ");
if (checkEmail(email)) {
  console.log("email hợp lệ");
} else {
  console.log("Email ko hợp lệ");
}
