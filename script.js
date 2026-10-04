const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const task = taskInput.value;

    if (task === "") {
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = task;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function() {
        listItem.remove();
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});