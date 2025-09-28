const list = document.getElementById('todoList');
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');

list.addEventListener('click', (e) => {
    const delBtn = e.target.closest('button[data-action="delete"]');
    if (!delBtn) return;
    const li = delBtn.closest('li');
    if (li) li.remove();
});

addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');

    const title = document.createElement('span');
    title.className = 'title';
    title.textContent = text;

    const del = document.createElement('button');
    del.className = 'del';
    del.dataset.action = 'delete';
    del.textContent = 'Видалити';

    li.appendChild(title);
    li.appendChild(del);
    list.appendChild(li);

    input.value = '';
    input.focus();
}