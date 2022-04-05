import React, { useState, useEffect } from "react";
import TodoCreate from "./TodoCreate";
import TodoItemsContainer from "./TodoItemsContainer";
import styles from "./TodoListContainer.module.css"
import { getTodoDataApi, postTodoDataApi, deleteTodoDataApi, patchTodoDataApi } from "../../api/todo.api";

export default function TodoListContainer() {

  const [saveTodoData, setSaveTodoData] = useState([]);
  
  useEffect(() => {
    getTodoDatas();

  }, []);

  // get todo list
  const getTodoDatas = async () => {
    const { data } = await getTodoDataApi();
    setSaveTodoData(data)
  }

  //add todo item
  const addData = (item) => {
    const todoItem = {
      id: String(new Date()),
      todoItem: item.todoItem,
      checking: false
    }

    const newData = [...saveTodoData, item];
    postTodoDataApi(todoItem);
    setSaveTodoData(newData);

  }

  // delete todo item
  const deleteData = (i) => {
    const result = saveTodoData.filter(item => item.id !== i.id);
    deleteTodoDataApi(i.id);
    setSaveTodoData(result);

  }

  // update todo item
  const changeItem = (id, cnt, b) => {
    const updateItem = {
      "todoItem": cnt,
      "checking": b
    }
    patchTodoDataApi(id, updateItem);
  }

  const checkItem = () => {
    console.log('check')
  }

  return (
    <div className={styles.todo_list}>
      <h1>TODO LIST</h1>
      <TodoCreate addData={addData} />
      <TodoItemsContainer item={saveTodoData} deleteData={deleteData} changeItem={changeItem} checkItem={checkItem} />
    </div>

  )
} 