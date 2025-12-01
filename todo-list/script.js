document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("to-do");
    const addBtn = document.getElementById("btn");
    const ul = document.getElementById("todo-list");
    const todos = [];

    function saveTodos(){
         localStorage.setItem("todos", JSON.stringify(todos));
    }

    function addTodos(){
        const todoText = todoInput.value.trim();
        if(!todoText){
            alert("Please enter your todos");
            return;
        }
        const li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = todoText;

        const button = document.createElement("button");
        li.appendChild(button);
        button.textContent = "Remove";
        button.addEventListener("click", () => {
            ul.removeChild(li);

            const index = todos.indexOf(todoText);
            if(index > -1){
                todos.splice(index, 1);
            }
            saveTodos();
        });
        
        todos.push(todoText);
        todoInput.value = "";
        saveTodos();
    }
    addBtn.addEventListener("click", addTodos);
    

    
})