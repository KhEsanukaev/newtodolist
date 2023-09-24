 // Release 1: Создание массива с делами
 let todos = [
    {
        text: "первое дело",
        done: true
    },
    {
        text: "второе дело",
        done: false
    },
    {
        text: "третье дело",
        done: false
    },
    {
        text: "четвертое дело",
        done: true
    },
    {
        text: "пятое дело",
        done: false
    }
];

// Release 2: Функция для вывода дел на страницу
function render() {
    const listContainer = document.getElementById('list');
    
    // Release 4.1: Очистка контейнера перед добавлением элементов
    listContainer.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        // Release 8: Добавление галочки для отметки выполнения
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.done;
        checkbox.addEventListener('change', () => {
            checkTodo(i);
        });

        const todoText = document.createElement('span');
        todoText.textContent = todo.text;

        // Release 7: Добавление кнопки удаления
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'x';
        deleteButton.addEventListener('click', () => {
            remove(i);
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        listContainer.appendChild(todoItem);
    }
}

// Release 4: Функция для удаления дела
function remove(index) {
    todos.splice(index, 1);
    render(); // После удаления обновляем список
}

// Release 5: Функция для добавления нового дела
function addTodo(text) {
    const newTodo = {
        text: text,
        done: false
    };
    todos.push(newTodo);
    render(); // После добавления обновляем список
}

// Release 8: Функция для отметки дела выполненным
function checkTodo(index) {
    todos[index].done = !todos[index].done;
    render(); // После изменения обновляем список
}

// Release 6: Обработчик отправки формы
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
        addTodo(text);
        todoInput.value = '';
    }
});

// Инициализация при загрузке страницы
render();