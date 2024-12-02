function addTask() {
    var taskInput = document.getElementById('taskInput').value;
    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = taskInput + '<button class="btn btn-danger btn-sm float-end ms-2" onclick="deleteTask(this)">Delete</button>';
    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = '';
}

function deleteTask(button) {
    var li = button.parentElement;
    li.remove();
}