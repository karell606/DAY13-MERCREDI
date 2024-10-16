function deleteTask(id) {

    fetch(`http://localhost:3000/api/v1/todo/${id}`, {
        method: 'DELETE'
    })
    .then(() => location.reload())
    .catch(error => console.error('Error deleting task:', error));
}
