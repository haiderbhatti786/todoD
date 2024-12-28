// Function to add a task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var taskText = taskInput.value.trim();

        // Create li element
        var li = document.createElement("li");
        li.textContent = taskText;

        // Create delete button
        var deleteButton = document.createElement("span");
        deleteButton.innerHTML = "&#10060;";
        deleteButton.classList.add("delete-task");
        deleteButton.onclick = function() {
            li.remove();
            saveTasks();
        };

        // Append delete button to li
        li.appendChild(deleteButton);

        // Append li to ul
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";

        // Save tasks to local storage
        saveTasks();
    } else {
        alert("Please enter a task.");
    }
}

// Function to save tasks to local storage
function saveTasks() {
    var tasks = [];
    var taskElements = document.querySelectorAll("#taskList li");

    taskElements.forEach(function(taskElement) {
        tasks.push(taskElement.textContent);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage on page load
document.addEventListener("DOMContentLoaded", function() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(taskText) {
        var li = document.createElement("li");
        li.textContent = taskText;

        var deleteButton = document.createElement("span");
        deleteButton.innerHTML = "&#10060;";
        deleteButton.classList.add("delete-task");
        deleteButton.onclick = function() {
            li.remove();
            saveTasks();
        };

        li.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(li);
    });
});
