const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('add');
const todoList = document.getElementById('todoList');

function addTodo() {
    const todoText = todoInput.value.trim();
    // Validasi: pastikan input tidak kosong
    if (todoText === "") {
        alert("Silakan masukkan item untuk To-Do List.");
        return;
    }
    // Membuat elemen li untuk item baru
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${todoText}</span>
        <button class="delete">Hapus</button>
    `;
    // Menambahkan event listener pada tombol hapus
    li.querySelector('.delete').addEventListener('click', function() {
        li.remove(); // Menghapus item To-Do saat tombol Hapus diklik
    });
    // Menambahkan item ke dalam ul (todoList)
    todoList.appendChild(li);
    // Mengosongkan input setelah menambah item
    todoInput.value = "";
}

 // Menambahkan event listener untuk tombol tambah
addButton.addEventListener('click', addTodo);
// Menambahkan event listener untuk input (Enter key)
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});