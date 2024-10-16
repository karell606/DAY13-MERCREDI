document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/v1/todo')
        .then(response => response.json())
        .then(tasks => {
            const listContainer = document.querySelector('.list-container ul');
            listContainer.innerHTML = '';
            tasks.forEach(task => {
                listContainer.innerHTML += `<li>${task.name} <button onclick="editTask(${task.id})">Edit</button> <button onclick="deleteTask(${task.id})">Delete</button></li>`;
            });
        })
        .catch(error => console.error('Error fetching tasks:', error));
});
