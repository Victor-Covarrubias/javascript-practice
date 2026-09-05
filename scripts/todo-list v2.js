const todoList = [{
    name: 'make dinner',
    date: '2026-09-01'
}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const {name, date} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button class="delete-todo-button js-delete-todo-button">
            Delete
        </button>`;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    //we add the listener after putting the button in the page (html)
    //queryselectorall gets all the elements with that class
    //this gives us an array in this case its an array of buttons haha
    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });

}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
});

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