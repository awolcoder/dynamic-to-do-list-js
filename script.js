// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Create the addTask Function
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      // Create a new li element
      const taskListItem = document.createElement('li');
      taskListItem.textContent = taskText;

      // Create a new button element for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn'); // Use classList.add to add the class

      // Assign an onclick event to the remove button
      removeButton.onclick = () => {
        taskList.removeChild(taskListItem);
      };

      // Append the remove button to the li element
      taskListItem.appendChild(removeButton);

      // Append the li to taskList
      taskList.appendChild(taskListItem);

      // Clear the task input field
      taskInput.value = '';
    } else {
      alert('Please enter a task');
    }
  }

  // Attach Event Listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});