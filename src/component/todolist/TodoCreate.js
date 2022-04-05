import React,{useState} from "react";
import styles from "./TodoCreate.module.css"


export default function TodoCreate(props) {
  const [todoItem, setTodoItem] = useState('');
  const { addData } = props;
  const [idData, setIdData] = useState('')
  

  // 현재 날짜 
  const currentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    if (date < 10) date = '0' + date;
    if (month < 10) month = '0' + month;

    return year + `년 ` + month + `월 ` + date + `일`;
  }

  // todo 입력
  const createTodo = (e) => {
    setTodoItem(e.target.value);
  }

  // 추가하기 버튼
  const clickBtnCreate = () => {

    if (todoItem.length === 0) {
      return alert('할 일을 입력해주세요.');
    }

    addData({
      id: String(new Date()),
      todoItem: todoItem,
      checking: false
    });
    resetInput()

  }

  const resetInput = () => {
    setTodoItem('');

  }

  return (
    <div className={styles.todo_create}>
      <div className={styles.today_date}>{currentDate()}</div>
      <div className={styles.input_area}>
        <input className={styles.input_todo} type="text" placeholder="할 일을 입력해주세요." onChange={createTodo} value={todoItem}></input>
        <button className={styles.btn_create} onClick={clickBtnCreate}>추가하기</button>
      </div>
    </div>
  )
}