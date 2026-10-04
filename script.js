const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const task = taskInput.value;
    const date = taskDate.value;

    if (task === "" || date === "") {
        return;
    }

    const listItem = document.createElement("li");

    listItem.textContent = task + " - Due: " + date;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function() {
        listItem.remove();
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
    taskDate.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function handleEnter(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

taskInput.addEventListener("keydown", handleEnter);
taskDate.addEventListener("keydown", handleEnter);