function loadTodoList() {
    const todoList = getCookies('todoList');
    if (todoList) {
        const todos = JSON.parse(todoList);
        todos.reverse().forEach(todo => createTodoItem(todo));
    }
}

function createTodoItem(text) {
    const $todoDiv = $('<div></div>').addClass('todo-item').text(text);

    $todoDiv.on('click', function() {
        if (confirm('Do you want to remove this item?')) {
            $todoDiv.remove();
            saveTodoList();
        }
    });

    $('#ft_list').prepend($todoDiv);
}

function saveTodoList() {
    const todos = [];
    $('.todo-item').each(function() {
        todos.push($(this).text());
    });

    document.cookie = `todoList=${JSON.stringify(todos)}; path=/;`;
}

$('#newBtn').on('click', function() {
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

$(window).on('load', loadTodoList);