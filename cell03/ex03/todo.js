function loadTodoList() {
    let todoList = getCookies('todoList');
    if (todoList) {
        const todos = JSON.parse(todoList);
        todos.reverse().forEach(todo => createTodoItem(todo));
    }
}

function createTodoItem(text) {
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';
    todoDiv.textContent = text;

    todoDiv.addEventListener('click', function() {
        if (confirm('Do you want to remove this item?')) {
            todoDiv.remove();
            saveTodoList();
        }
    });

    const list = document.getElementById('ft_list');
    list.insertBefore(todoDiv, list.firstChild);
}

function saveTodoList() {
    const todos = [];
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(item => todos.push(item.textContent));

    document.cookie = `todoList=${JSON.stringify(todos)}; path=/;`;
}

document.getElementById('newBtn').addEventListener('click', function() {
    const todoText = prompt('Enter a new TO DO:');
    if (todoText && todoText.trim()) {
        createTodoItem(todoText.trim());
        saveTodoList(); 
    }
});

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

window.onload = loadTodoList;
