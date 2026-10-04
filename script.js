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
}function addTask() {
    const task = taskInput.value;
    const date = taskDate.value;

    if (task === "") {
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