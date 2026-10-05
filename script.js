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
        id: Date.now(),
        text: task,
        date: date
    };

    tasks.push(newTask);

    displayTasks();

    taskInput.value = "";
    taskDate.value = "";
}

function displayTasks() {
    taskList.innerHTML = "";

    for (const task of tasks) {
        const listItem = document.createElement("li");

        listItem.textContent = task.text + " - Due: " + task.date;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", function() {
            const index = tasks.findIndex(function(item) {
                return item.id === task.id;
            });

            tasks.splice(index, 1);

            displayTasks();
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }
}

sortSelect.addEventListener("change", function() {
    const sortType = sortSelect.value;

    if (sortType === "oldest") {
        tasks.sort(function(a, b) {
            return new Date(a.date) - new Date(b.date);
        });
    }

    if (sortType === "newest") {
        tasks.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        });
    }

    displayTasks();
});

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        taskDate.focus();
    }
});

taskDate.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

addButton.addEventListener("click", addTask);