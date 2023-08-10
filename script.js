const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todosUL.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll("li");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

// New API POST request
const newTask = {
    // Your task properties like 'title', 'completed', etc.
  };
  
  fetch('http://localhost:3001/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
  })
    .then(response => response.json())
    .then(savedTask => {
      // Handle the response if needed
    })
    .catch(error => {
      // Handle errors
    });

    // New API DELETE request
fetch(`http://localhost:3001/api/tasks/${task.id}`, {
  method: 'DELETE'
})
  .then(response => {
    if (response.status === 204) {
      // Task removed successfully
      // Update your UI as needed
    } else {
      // Handle other response statuses
    }
  })
  .catch(error => {
    // Handle errors
  });

  // Filter options
const filterAllButton = document.getElementById('all');
const filterCompletedButton = document.getElementById('completed');

// Display tasks based on selected filter
filterAllButton.addEventListener('click', () => {
  displayTasks(tasks);
});

filterCompletedButton.addEventListener('click', () => {
  const completedTasks = tasks.filter(task => task.completed);
  displayTasks(completedTasks);
});

function displayTasks(taskList) {
    // Clear existing tasks
    taskListContainer.innerHTML = '';
  
    // Loop through tasks and display them
    taskList.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.textContent = task.title;
  
      if (task.completed) {
        taskItem.classList.add('completed');
      }
  
      taskListContainer.appendChild(taskItem);
    });
  }

  