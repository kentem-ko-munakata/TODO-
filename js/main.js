"use strict";

const todos = [
    { id: 1, text: "aaa", isCompleted: false },
    { id: 2, text: "bbb", isCompleted: false },
    { id: 3, text: "ccc", isCompleted: false },
    { id: 4, text: "ddd", isCompleted: false },
];

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector(".todo-input");
const todoInputField = document.querySelector("#todo-input-field");
const purgeButton = document.querySelector("#purge-button")

// 初期表示
displayTodo(todos)

// TODO一覧表示
function displayTodo(todos) {
    // 現在表示されているTODOをすべて削除
    todoList.replaceChildren();

    // 各todo単位でtodo-itemの作成
    todos.forEach((todo) => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item")
        todoItem.classList.toggle("completed", todo.isCompleted);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("todo-checkbox")
        checkbox.checked = todo.isCompleted;

        const todoText = document.createElement("span");
        todoText.classList.add("todo-text");
        todoText.textContent = todo.text;

        // チェックボックスイベントリスナー
        checkbox.addEventListener("change", () => {
            // 
            todo.isCompleted = checkbox.checked;
            todoItem.classList.toggle("completed", todo.isCompleted);
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("todo-delete-button");
        deleteButton.textContent = "X";

        // 削除ボタンのイベントリスナー
        deleteButton.addEventListener("click", () => {
            deleteTodo(todo.id)
        })

        todoItem.append(checkbox, todoText, deleteButton);
        todoList.append(todoItem);
    });
}


// 追加ボタンのイベントリスナー
todoForm.addEventListener("submit", (event) => {
    // 送信時のページ更新防止
    event.preventDefault();

    // 空白除去したtodo取得
    const todo = todoInputField.value.trim();
    if (todo === "") {
        return;
    }
    
    todos.push({
        id: crypto.randomUUID(),
        text: todo,
        isCompleted: false,
    });
    displayTodo(todos);
    todoInputField.value = "";
    todoInputField.focus();
});

// TODO削除
function deleteTodo(todoId) {
    const index = todos.findIndex((todo) => todo.id === todoId);

    if (index === -1) {
        return;
    }

    todos.splice(index, 1);
    displayTodo(todos)
}

// 一括削除ボタンのイベントリスナー
purgeButton.addEventListener("click", ()=>{
    const confirmDelete = confirm("TODOをすべて削除しますか？");

    if(!confirmDelete){
        return;
    }

    todos.splice(0, todos.length);
    displayTodo(todos);
})
