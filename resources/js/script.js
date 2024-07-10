document.addEventListener("DOMContentLoaded", () => {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById('todo-input');
    const todoForm = document.getElementById('todo-form');
    const filterOption = document.getElementById('filter');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');

            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    todoItem.classList.add('completed');
                } else {
                    todoItem.classList.remove('completed');
                }
                filterTodos();
            });
            label.appendChild(checkbox);

            const text = document.createTextNode(' ' + todoText);
            label.appendChild(text);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                todoList.removeChild(todoItem);
            });

            todoItem.appendChild(label);
            todoItem.appendChild(deleteBtn);
            todoList.appendChild(todoItem);

            todoInput.value = '';
            todoInput.focus();
        }
    });

    filterOption.addEventListener('change', filterTodos);

    function filterTodos() {
        const todos = Array.from(todoList.children);
        const filter = filterOption.value;
        todos.forEach(todo => {
            switch (filter) {
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'completed':
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                case 'uncompleted':
                    if (!todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
            }
        });
    }
});
