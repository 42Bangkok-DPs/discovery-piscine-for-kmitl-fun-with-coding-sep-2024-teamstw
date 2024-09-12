// ฟังก์ชันสำหรับการโหลด To Do list จากคุกกี้
function loadTodoList() {
    let todoList = getCookies('todoList');
    if (todoList) {
        const todos = JSON.parse(todoList);
        todos.reverse().forEach(todo => createTodoItem(todo));
    }
}

// ฟังก์ชันสำหรับการสร้าง To Do Item
function createTodoItem(text) {
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';
    todoDiv.textContent = text;

    // เพิ่ม event สำหรับการลบ To Do
    todoDiv.addEventListener('click', function() {
        if (confirm('Do you want to remove this item?')) {
            todoDiv.remove();
            saveTodoList();  // บันทึกหลังจากการลบ
        }
    });

    // เพิ่ม To Do ไปที่ด้านบนของ list
    const list = document.getElementById('ft_list');
    list.insertBefore(todoDiv, list.firstChild);
}

// ฟังก์ชันสำหรับการบันทึก To Do list ในคุกกี้
function saveTodoList() {
    const todos = [];
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(item => todos.push(item.textContent));

    document.cookie = `todoList=${JSON.stringify(todos)}; path=/;`;
}

// ฟังก์ชันสำหรับการสร้าง To Do ใหม่
document.getElementById('newBtn').addEventListener('click', function() {
    const todoText = prompt('Enter a new TO DO:');
    if (todoText && todoText.trim()) {
        createTodoItem(todoText.trim());
        saveTodoList();  // บันทึกหลังจากการเพิ่ม
    }
});

// ฟังก์ชันสำหรับการดึงข้อมูลจากคุกกี้
function getCookies(name) {
    const cookieArr = document.cookie.split("; ");
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0]) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// โหลด To Do list เมื่อหน้าเว็บถูกเปิดขึ้น
window.onload = loadTodoList;
