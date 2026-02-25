const pi = 3.14;

function main() {
  let choice;
  do {
    choice = prompt(
    `--- MENU ---
    1. Tính diện tích hình tròn.
    2. Tính chu vi hình tròn.
    3. Tính diện tích hình chữ nhật.
    4. Tính chu vi hình chữ nhật.
    5. Thoát.
    Mời bạn nhập vào lựa chọn của bạn: `,
    );

    switch (choice) {
      case "1":
        acrCircle();
        break;
      case "2":
        perimeterCircle();
        break;
      case "3":
        arcRectangle();
        break;
      case "4":
        perimeterRectangle();
        break;
      case "5":
        alert("Hẹn gặp lại..!!");
        break;
      default:
        alert("Vui lòng nhập lựa chọn từ 1 đến 5!!!");
        break;
    }
  } while (choice !== "5" && choice !== null);
}

function acrCircle() {
  let r = Number(prompt("Nhập vào bán kính hình tròn: "));
  if (isNaN(r) || r <= 0) {
    alert("Vui lòng nhập một số dương!!!");
    return;
  }

  let acrCircle = pi * r ** 2;
  alert(`Diện tích hình tròn có bán kính ${r} là: ${acrCircle}`);
}

function perimeterCircle() {
  let r = Number(prompt("Nhập vào bán kính hình tròn: "));
  if (isNaN(r) || r <= 0) {
    alert("Vui lòng nhập một số dương!!!");
    return;
  }

  let perimeterCircle = 2 * pi * r;
  alert(`Chu vi hình tròn có bán kính ${r} là: ${perimeterCircle}`);
}

function arcRectangle() {
    let a = Number(prompt("Nhập chiều dài của hình chữ nhật là: "));
    let b = Number(prompt("Nhập chiều rộng của hình chữ nhật là: "));
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        alert("Vui lòng nhập số dương!!!");
        return;
    }

    let arcRectangle = a * b;
    alert(`Diện tích hình chữ nhật có chiều dài ${a} chiều rộng ${b} là: ${arcRectangle}`);
}

function perimeterRectangle() {
    let a = Number(prompt("Nhập chiều dài của hình chữ nhật là: "));
    let b = Number(prompt("Nhập chiều rộng của hình chữ nhật là: "));
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        alert("Vui lòng nhập số dương!!!");
        return;
    }

    let perimeterRectangle = (a + b) * 2;
    alert(`Chu vi hình chữ nhật có chiều dài ${a} chiều rộng ${b} là: ${perimeterRectangle}`);
}

main();
