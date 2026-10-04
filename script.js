const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    const task = taskInput.value;

    const listItem = document.createElement("li");
    listItem.textContent = task;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function() {
        listItem.remove();
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
});