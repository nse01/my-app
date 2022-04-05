import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";
import styles from "./CreateDay.module.css"

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  const addDay = () => {
    fetch('http://localhost:3001/days/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        day: days.length + 1

      })
    })
      .then(res => {
        if (res.ok) {
          alert('Day 추가가 완료되었습니다.');
          history.push('/voca/');
        }
      })
  }
  
  const cancel = () => {
    history.goBack();
  }

  return (
    <div className={styles.CreateDay}>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
      <button onClick={cancel} className={styles.btn_cancel}>취소</button>
    </div>
  )
}