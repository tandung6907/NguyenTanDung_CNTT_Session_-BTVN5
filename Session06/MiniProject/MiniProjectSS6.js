let libraries = ["Toán", "Văn", "Anh"];
let attempts = 0;
let loggedIn = false;

while (attempts < 3 && attempts === false) {
  let username = prompt("Nhập tên đăng nhập:");
  let password = prompt("Nhập mật khẩu:");

  if (username === "admin" && password === "12345") {
    loggedIn = true;
    alert("Đăng nhập thành công!");
  } else {
    attempts = attempts + 1;
    let relogin = 3 - attempts;

    if (relogin > 0) {
      alert(`Bạn nhập sai tài khoản hoặc mật khẩu! Còn ${relogin} lần thử.`);
    } else {
      alert("Tài khoản đã bị khóa!");
    }
  }
}

if (loggedIn === true) {
  let choice;

  do {
    let menu =
      "=== QUẢN LÝ THƯ VIỆN ===\n" +
      "1. Nhập thêm lô sách mới\n" +
      "2. Hiển thị danh sách sách\n" +
      "3. Tìm kiếm sách\n" +
      "4. Cập nhật tên sách\n" +
      "5. Đảo ngược kệ sách\n" +
      "6. Nhập kho từ nguồn khác\n" +
      "7. Thoát\n\n" +
      "Lựa chọn của bạn:";

    choice = parseInt(prompt(menu));

    switch (choice) {
      case 1:
        let inputNew = prompt(
          "Nhập tên các cuốn sách (cách nhau bởi dấu phẩy):",
        );
        if (inputNew !== null && inputNew.trim() !== "") {
          let newBooks = inputNew.split(",");
          let countAdded = 0;
          for (let i = 0; i < newBooks.length; i++) {
            let cleanName = newBooks[i].trim();
            if (cleanName !== "") {
              libraries[libraries.length] = cleanName;
              countAdded++;
            }
          }
          alert(`Đã thêm ${countAdded} sách mới!`);
        } else {
          alert("Dữ liệu không hợp lệ!");
        }
        break;
      case 2:
        if (libraries.length === 0) {
          console.log("Kho trống!");
        } else {
          console.log("=== DANH SÁCH THƯ VIỆN ===");
          for (let i = 0; i < libraries.length; i++) {
            console.log(i + 1 + ". " + libraries[i]);
          }
        }
        break;
      case 3:
        let searchName = prompt("Nhập tên sách cần tìm:");
        if (searchName !== null && searchName.trim() !== "") {
          let isFound = false;
          let found = -1;
          for (let i = 0; i < libraries.length; i++) {
            if (
              libraries[i].toLowerCase() === searchName.trim().toLowerCase()
            ) {
              isFound = true;
              found = i;
              break;
            }
          }
          if (isFound === true) {
            alert(`Tìm thấy sách tại vị trí: ${found}`);
          } else {
            alert("Không tìm thấy sách!");
          }
        }
        break;
      case 4:
        let oldName = prompt("Nhập tên sách muốn sửa:");
        let updateIndex = -1;
        for (let i = 0; i < libraries.length; i++) {
          if (libraries[i].toLowerCase() === oldName.trim().toLowerCase()) {
            updateIndex = i;
            break;
          }
        }

        if (updateIndex !== -1) {
          let newName = prompt("Nhập tên mới cho sách:");
          if (newName !== null && newName.trim() !== "") {
            libraries[updateIndex] = newName.trim();
            alert("Cập nhật thành công!");
          }
        } else {
          alert("Không tìm thấy sách để sửa!");
        }
        break;
      case 5:
        libraries.reverse();
        console.log("Đã đảo ngược thứ tự kệ sách!");
        break;
      case 6:
        let otherLibraries = prompt(
          "Nhập sách từ chi nhánh (cách bởi dấu phẩy):",
        );
        if (otherLibraries !== null && otherLibraries.trim() !== "") {
          let otherBooks = otherLibraries.split(",");
          let cleanList = [];
          for (let i = 0; i < otherBooks.length; i++) {
            let bookItem = otherBooks[i].trim();
            if (bookItem !== "") {
              cleanList[cleanList.length] = bookItem;
            }
          }
          libraries = libraries.concat(cleanList);
          alert("Gộp kho thành công!");
        }
        break;
      case 7:
        alert("Hẹn gặp lại!");
        break;
      default:
        alert("Lựa chọn từ 1 đến 7!");
        break;
    }
  } while (choice !== 7);
}
