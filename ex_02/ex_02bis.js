document.querySelector('.add-button').addEventListener('click', (event) => {

    event.preventDefault();
    const newTaskName = document.getElementById('results-textarea').value;
    if (!newTaskName) {
        alert('Task name must not be empty');
        return;
    }
    fetch('http://localhost:3000/api/v1/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newTaskName })
    })
    .then(() => location.reload())
    .catch(error => console.error('Error adding task:', error));
});
