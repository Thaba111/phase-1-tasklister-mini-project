document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const taskElement = document.createElement("li");
    taskElement.textContent = taskDescription;

    // Add a delete button to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskElement.remove(); // Remove the task when the delete button is clicked
    });

    taskElement.appendChild(deleteButton);

    const tasksList = document.getElementById("tasks");
    tasksList.appendChild(taskElement);

    document.getElementById("new-task-description").value = "";
  });
});