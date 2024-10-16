function editTask(id) {

    const newValue = prompt('Enter new task value:');
    if (!newValue) return;
    fetch(`http://localhost:3000/api/v1/todo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newValue })
    })
    .then(() => location.reload())
    .catch(error => console.error('Error updating task:', error));
}
