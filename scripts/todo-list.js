const todoList = [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    //generate html with a loop
    for(let i = 0; i < todoList.length; i++){
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');

    //to get what is typed in the textbox
    const name = inputElement.value;
    
    todoList.push(name);
    console.log(todoList);

    //to empty the text in the textbox
    inputElement.value = '';
    //to update the html
    renderTodoList();
}