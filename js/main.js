"use strict";

const todos = ["aaa", "bbb", "ccc", "ddd"];

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form")
const todoInputField = document.querySelector("#todo-input-field")

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

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("todo-checkbos")

        const todoText = document.createElement("span");
        todoText.classList.add("todo-text");
        todoText.textContent = todo;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("todo-delete-button");
        deleteButton.textContent = "X";

        todoItem.append(checkbox, todoText, deleteButton);
        todoList.append(todoItem);
    });
}


// 追加ボタンのイベントリスナー

// チェックボックスのイベントリスナー

// 削除ボタンのイベントリスナー

// 一括削除ボタンのイベントリスナー