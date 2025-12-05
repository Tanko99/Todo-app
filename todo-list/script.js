let todos = JSON.parse(localStorage.getItem("todos")) || [];
//This function helps saves todos in a local storage
function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

// This function adds todos to the list
function addTodos(){
    const todoInput = document.getElementById("to-do");
    const todoText = todoInput.value.trim();
    if(!todoText){
        alert("Please enter a todo item");
        return;
    }
    todos.push({
        id: Date.(),
        text: todoText,
        completed: false
    });
    saveTodos();
    displayTodos();
    todoInput.value = '';

}

//This function displays all the entered/added todos
function showTodos(){
    const ul = document.getElementById("todo-list");
    ul.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement("li");

        li.innerHTML = `
        <span class="${todo.completed ? 'completed'  : ''}"> ${todo.text}</span>
        <button onClick="toggleTodos(${todo.id})">✔</button>
        <button onClick="editTodos(${todo.id})"> ✏ </button>
        <button onClick="deleteTodos(${todo.id})">❌</button>
        `
        ul.appendChild(li);
    });
}

//This function toggles todos as completed when a particular task is completed.
function toggleTodos(id){
    todos = todos.map(todo => todo.id === id ? {...todo, completed: [todo.completed]  } : todo );
    saveTodos();
    displayTodos();
}

//This function enables users to edit their tasks

function editTodos(){
    const newText = prompt("Edit your todos");
    if(!newtext) return;
    todos = todos.map(todo => todo.id === id ? {...todo, text: {newText} } : todo );
    saveTodos();
    displayTodos();
}

//This function neables users to delete a task completely.
function deleteTodos(id){
    todos = todos.filter(todo => todo.id !== id);
    displayTodos();
}
