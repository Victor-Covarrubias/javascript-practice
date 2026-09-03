const todoList = [{
    name: 'make dinner',
    date: '2026-09-01'
}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index){
        const {name, date} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button onclick="
            todoList.splice(${index}, 1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>`;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dateinputElement = document.querySelector('.js-due-date-input');

    //to get what is typed in the textbox
    const name = inputElement.value;
    const dueDate = dateinputElement.value;
    
    todoList.push({
        name, 
        date: dueDate
    });

    //to empty the text in the textbox
    inputElement.value = '';
    //to update the html
    renderTodoList();
}