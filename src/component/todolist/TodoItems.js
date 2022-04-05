import React, { useState, useRef } from "react";
import styles from "./TodoItems.module.css"


export default function TodoItems(props) {
  const { deleteData, item, changeItem, checkItem } = props;
  const { id, todoItem, checking } = item;
  const [isChecked, setChecked] = useState(checking);
  const [isChange, setChange] = useState(false);
  const [dataTodoItem, setDataTodoItem] = useState(todoItem)
  const inputRef = React.useRef(null);

  // button (delete or modify cancel) click event
  const clickBtnDelete = () => {
    if (isChange) {
      // Undo edit
      setChange(false);
      inputRef.current.value = todoItem;
      setDataTodoItem(todoItem);
      console.log('수정취소')
    } else {
      // delete
      deleteData(item);
      console.log('삭제하기')
    }

  }

  // button modify click event
  const clickBtnChange = () => {
    // modify
    if (isChange) setChange(false)
    else setChange(true)
    inputRef.current.focus();
    console.log('수정하기')
  }

  // data modify event
  const changeUpdateTodo = (e) => {
    setDataTodoItem(e.target.value);

  }

  // todo checking & json update
  const checkedTodo = (e) => {
    setChecked(e.target.checked);
    changeItem(item.id, dataTodoItem, e.target.checked);
  }

  //json update
  const updateItems = () => {
    changeItem(item.id, dataTodoItem, isChecked);
    setChange(false);
    inputRef.current.value = dataTodoItem;
    console.log('수정완료')
  }

  const buttonChangeName = isChange ? '수정완료' : '수정하기';
  const buttonDeleteName = isChange ? '수정취소' : '삭제하기';
  const eventUpdate = isChange ? updateItems : clickBtnChange;
  const inputCheckState = isChecked ? 'checked' : '';

  return (
    <div>

      <div className={styles.item_list + ' ' + (isChecked ? styles.on : ' ')}>
        <div className={styles.item}>
          <input type="text"
            className={isChange ? styles.item_input : styles.item_input_none}
            placeholder={dataTodoItem}
            value={dataTodoItem}
            readOnly={(isChange ? false : true)}
            onChange={changeUpdateTodo}
            ref={inputRef}
          >
          </input>
          <small>{item.id.replace(' GMT+0900 (한국 표준시)', '')}</small>
        </div>
        <div className={styles.btn_other}>
          <button className={(isChange ? styles.on_change : '')} onClick={eventUpdate}>{buttonChangeName}</button>
          <button className={(isChange ? styles.on_change : '')} onClick={clickBtnDelete}>{buttonDeleteName}</button>
          <input type="checkbox" onChange={checkedTodo} checked={inputCheckState}></input>
        </div>
      </div>
    </div>

  )
} 