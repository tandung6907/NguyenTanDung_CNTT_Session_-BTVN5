let password;
let count = 0;

while (password != "12345") {
    password = prompt("Mời nhập password: ");
    count++;
    if (count >= 3) {
        break;
    }
}