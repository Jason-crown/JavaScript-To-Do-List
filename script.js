const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const sortSelect = document.getElementById("sortSelect");

const tasks = [];

function addTask() {
    const task = taskInput.value;
    const date = taskDate.value;

    if (task === "" || date === "") {
        return;
    }

    const newTask = {
        text: task,
        date: date
    };

    tasks.push(newTask);

    displayTasks();

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