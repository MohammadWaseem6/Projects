const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value;
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<input type="checkbox"> ${taskText} <button class="delete">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        // Add event listener to the delete button
        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });
    }
}

taskList.addEventListener("change", (e) => {
    if (e.target && e.target.tagName === "INPUT") {
        const taskItem = e.target.parentElement;
        taskItem.classList.toggle("completed");
    }
});

// Add event listener to the "Add" button
addTaskButton.addEventListener("click", addTask);

// Add tasks when the "Enter" key is pressed
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
