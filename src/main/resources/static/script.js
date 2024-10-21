const apiUrl = 'http://localhost:8080/api/tasks';

async function fetchTasks() {
    const response = await fetch(apiUrl);
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.classList.toggle('completed', task.completed);

        li.innerHTML = `
            <input type="checkbox" onchange="toggleTask(${task.id}, this)" ${task.completed ? 'checked' : ''}>
            <span>${task.title}</span>
            <button class="delete" onclick="deleteTask(${task.id})">
                <img src="images/trash-icon.png" alt="Excluir" class="icon">
            </button>
        `;
        taskList.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById('taskInput');
    const taskTitle = input.value;

    if (taskTitle) {
        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: taskTitle, completed: false }),
        });

        input.value = '';
        fetchTasks();
    }
}

async function deleteTask(id) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    });

    fetchTasks();
}

async function toggleTask(id, checkbox) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: checkbox.checked }),
    });
    
    fetchTasks();
}

fetchTasks();
