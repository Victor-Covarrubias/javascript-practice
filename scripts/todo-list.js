const todoList = [{
    name: 'make dinner',
    date: '2026-09-01'
}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    //generate html with a loop
    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const date = todoObject.date;
        const {name, date} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>`;
        todoListHTML += html;
    }

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