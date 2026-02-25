let integers = [];
function main() {
  let choice;
  do {
    choice = prompt(
      `--- MENU ---
1, Nhập danh sách số nguyên 
2. Tính trung bình các số
3. Tìm số chẵn lớn nhất
4. Tìm số lẻ nhỏ nhất
5. Thoát
Mời bạn nhập vào lựa chọn: `,
    );

    switch (choice) {
      case "1":
        inputInteger();
        break;
      case "2":
        aveNumber();
        break;
      case "3":
        maxEven();
        break;
      case "4":
        minOdd();
        break;
      case "5":
        alert("Hẹn gặp lại...!!");
        break;
      default:
        alert("Vui lòng nhập lựa chọn từ 1 đến 5!!!");
        break;
    }
  } while (choice !== "5" && choice !== null);
}

function inputInteger() {
  let n;
  while (true) {
    n = parseInt(prompt("Nhập vào số lượng số nguyên muốn thêm"));

    if (!isNaN(n) && n > 0) {
      break;
    }
    alert("Vui lòng nhập số lượng là số nguyên lớn hơn 0!!!");
  }

  for (let i = 0; i < n; i++) {
    let number;
    while (true) {
      number = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}: `));
      if (!isNaN(number)) {
        break;
      }
      alert("Vui lòng nhập số nguyên!!!");
    }
    integers.push(number);
  }

  alert("Đã thêm danh sách số nguyên thành công!!");
}

function aveNumber() {
  if (integers.length === 0) {
    alert("Danh sách số nguyên rỗng!!!");
    return;
  }

  let sum = integers.reduce((sum, n) => sum + n, 0);
  alert(
    "Trung bình các số nguyên trong danh sách là: " +
      (sum / integers.length).toFixed(2),
  );
}

function maxEven() {
  if (integers.length === 0) {
    alert("Danh sách số nguyên rỗng!!!");
    return;
  }

  let evens = integers.filter(p => p % 2 === 0 );
  if (evens.length === 0) {
    alert("Trong danh sách không có số chẵn");
    return;
  }
  let maxEvens = Math.max(...evens);

  alert(`Số chẵn lớn nhất là ${maxEvens}`);
}

function minOdd() {
  if (integers.length === 0) {
    alert("Danh sách số nguyên rỗng!!!");
    return;
  }

  let odds = integers.filter(p => p % 2 !== 0 );
  if (odds.length === 0) {
    alert("Trong danh sách không có số lẻ");
    return;
  }
  let minOdds = Math.min(...odds);

  alert(`Số lẻ nhỏ nhất là ${minOdds}`); 
}

main();
