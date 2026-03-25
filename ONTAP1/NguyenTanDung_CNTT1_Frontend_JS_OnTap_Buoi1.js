const STORAGE_KEY = "music_box";

let listSong = [];
let nextId = 1;

let isEdit = false;
let editId = null;

// lấy DOM
const songName = document.getElementById("title");
const singerName = document.getElementById("artist");
const songTable = document.getElementById("songTable");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");

// save - load - chạy load
function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(listSong));
}

function loadFromLocalStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

window.onload = function () {
  const data = loadFromLocalStorage();

  if (data.length > 0) {
    listSong = data;
    nextId = listSong.length
      ? Math.max(...listSong.map((item) => item.id)) + 1
      : 1;
  }

  renderInfor();
};

// hàm submit
function handleSubmit() {
  // lấy tên bài hát - ca sĩ
  const song = songName.value.trim();
  const singer = singerName.value.trim();
  // kiểm tra rỗng
  if (!song || !singer) {
    alert("Không được để trống!");
    return;
  }
  // sửa hoặc thêm
  if (isEdit) {
    const index = listSong.findIndex((item) => item.id === editId);

    if (index !== -1) {
      listSong[index].song = song;
      listSong[index].singer = singer;
    }

    isEdit = false;
    editId = null;

    formTitle.innerText = "🎵 Thêm bài hát";
    submitBtn.innerText = "Thêm";
  } else {
    listSong.push({
      id: nextId++,
      song,
      singer,
    });
  }

  saveToLocalStorage();
  renderInfor();

  // reset
  songName.value = "";
  singerName.value = "";
  songName.focus();
}

// render dữ liệu
function renderInfor(keyword = "") {
  let data = listSong;

  if (keyword) {
    data = listSong.filter((item) =>
      item.song.toLowerCase().includes(keyword.toLowerCase()),
    );
  }

  if (data.length === 0) {
    songTable.innerHTML = `<tr><td colspan="4">Không có dữ liệu</td></tr>`;
    return;
  }

  songTable.innerHTML = "";

  data.forEach((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.song}</td>
      <td>${item.singer}</td>
      <td>
        <button onclick="handleEdit(${item.id})">Sửa</button>
        <button onclick="handleDelete(${item.id})">Xóa</button>
      </td>
    `;

    songTable.appendChild(tr);
  });
}

// hàm khi bấm vào sửa chuyển đổi ô input thành trạng thái sửa ở handleSubmit
function handleEdit(id) {
  const song = listSong.find((item) => item.id === id);

  songName.value = song.song;
  singerName.value = song.singer;

  isEdit = true;
  editId = id;

  formTitle.innerText = "✏️ Sửa bài hát";
  submitBtn.innerText = "Cập nhật";
}

// hàm xóa dùng filter lọc tạo ra 1 mảng không chứa id bị xóa
function handleDelete(id) {
  const song = listSong.find((p) => p.id === id);
  if (!song) return;

  const confirmDelete = confirm(`Bạn có chắc muốn xóa bài "${song.song}" không?`);
  if (!confirmDelete) return;

  listSong = listSong.filter((item) => item.id !== id);

  saveToLocalStorage();
  renderInfor();
}

// tìm kiếm theo từ khóa
function searchSong() {
  const keyword = document.getElementById("search").value;
  renderInfor(keyword);
}

// lắng nghe sự kiện khi nhấn enter
document.querySelector(".form").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSubmit();
  }
});
