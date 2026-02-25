function main() {
  let choice;
  do {
    choice = prompt(
      ` --- MENU ---
    1. Cộng hai số
    2. Trừ hai số
    3. Nhân hai số
    4. Chia hai số
    5. Thoát
    Mời bạn nhập vào lựa chọn của mình: `,
    );

    switch (choice) {
      case "1":
        sumOfNumber();
        break;
      case "2":
        subOfNumber();
        break;
      case "3":
        accOfNumber();
        break;
      case "4":
        divOfNumber();
        break;
      case "5":
        alert("Hẹn gặp lại..!");
        break;
      default:
        alert("Vui lòng nhập lựa chọn từ 1 đến 5!!");
        break;
    }
  } while (choice !== "5" && choice !== null);
}

function sumOfNumber() {
  let a = Number(prompt("Nhập vào số thứ nhất: "));
  let b = Number(prompt("Nhập vào số thứ hai: "));
  if (isNaN(a) || isNaN(b)) {
    alert("Vui lòng nhập số hợp lệ!");
    return;
  }
  let sum = a + b;
  alert("Tổng của hai số vừa nhập là: " + sum);
}

function subOfNumber() {
  let a = Number(prompt("Nhập vào số thứ nhất: "));
  let b = Number(prompt("Nhập vào số thứ hai: "));
  if (isNaN(a) || isNaN(b)) {
    alert("Vui lòng nhập số hợp lệ!");
    return;
  }
  let sub = a - b;
  alert("Hiệu của hai số vừa nhập là: " + sub);
}

function accOfNumber() {
  let a = Number(prompt("Nhập vào số thứ nhất: "));
  let b = Number(prompt("Nhập vào số thứ hai: "));
  if (isNaN(a) || isNaN(b)) {
    alert("Vui lòng nhập số hợp lệ!");
    return;
  }
  let acc = a * b;
  alert("Tích của hai số vừa nhập là: " + acc);
}

function divOfNumber() {
  let a = Number(prompt("Nhập vào số thứ nhất: "));
  let b = Number(prompt("Nhập vào số thứ hai: "));
  if (isNaN(a) || isNaN(b)) {
    alert("Vui lòng nhập số hợp lệ!");
    return;
  }

  if (b === 0) {
    alert("Không thể chia cho 0!");
    return;
  }
  let div = a / b;
  alert("Thương của hai số vừa nhập là: " + div);
}
main();
