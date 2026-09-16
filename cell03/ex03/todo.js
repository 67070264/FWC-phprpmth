const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");

window.addEventListener("DOMContentLoaded", () => {
    const savedTodos = getCookie("todos");
    if (savedTodos) {
        const todosArray = JSON.parse(savedTodos);
        todosArray.forEach(todoText => {
            appendTodoToDOM(todoText, false); 
        });
    }
});

newBtn.addEventListener("click", () => {
    const todoText = prompt("Enter a new TO DO:");
    if (todoText !== null && todoText.trim() !== "") {
        appendTodoToDOM(todoText.trim(), true); 
        saveTodosToCookie();
    }
});

function appendTodoItem(text, prepend = true) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";
    todoDiv.textContent = text;

    todoDiv.addEventListener("click", () => {
        if (confirm("Do you want to remove this TO DO?")) {
            todoDiv.remove();
            saveTodosToCookie();
        }
    });

    if (prepend) {
        ftList.insertBefore(todoDiv, ftList.firstChild); 
    } else {
        ftList.appendChild(todoDiv);
    }
}

function appendTodoToDOM(text, shouldSave) {
    appendTodoItem(text, true);
    if (shouldSave) {
        saveTodosToCookie();
    }
}

function saveTodosToCookie() {
    const items = ftList.querySelectorAll(".todo-item");
    const todosArray = [];
    items.forEach(item => {
        todosArray.push(item.textContent);
    });
    const d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todosArray)) + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}