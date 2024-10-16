const todoData = {
    "todo": [
        {"title": "Finir la piscine", "content": "Survivre jusqu'à la fin", "done": false, "id": "i1fjp93yyz"},
        {"title": "Créer cette todo", "content": "Ça devrait être bon", "done": false, "id": "6dpbwk5zsr"}
    ]
};

function fetchAndDisplayTasks() {
    const listContainer = document.querySelector('.list-container ul');

    listContainer.innerHTML = '';

    todoData.todo.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${task.title}
            <button>Edit</button>
            <button>Delete</button>
        `;
        listContainer.appendChild(listItem);
    });
}

fetchAndDisplayTasks();

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const newTaskTitle = document.getElementById('results-textarea').value;

    todoData.todo.push({
        title: newTaskTitle,
        content: '',
        done: false,
        id: 'id' + Math.random().toString(36).substr(2, 9) 
    });

    fetchAndDisplayTasks();

    document.getElementById('results-textarea').value = '';
});
