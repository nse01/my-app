import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";
import styles from "./CreateWord.module.css"


export default function CreateWord(props) {
  
  const days = useFetch("http://localhost:3001/days");
  const engRef = useRef(null); //useRef를 이용하여 돔에 접근할수 있도록 한다.
  const korRef = useRef(null);
  const dayRef = useRef(null);
  const history = useHistory(); // react-router에서 제공하는 기능
  const [isLoading, setIsLoading] = useState(false);
  
  const dayOption = days.map((day) => {
    return (
      <option key={day.id} value={day.day}>
        {day.day}
      </option>
    )
  });

  // console.log('[[[[[',location.state.data)
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(engRef.current.value); // 접근...ㅎ
    // console.log(korRef.current.value);
    // console.log(dayRef.current.value);
    if (engRef.current.value.length === 0) {
      return alert('영어 단어를 입력해주세요.')
    }
    if (korRef.current.value.length === 0) {
      return alert('한국어 단어를 입력해주세요.')
    }
    if (!isLoading) {
      setIsLoading(true);
      fetch('http://localhost:3001/words/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false
        })
      })
        .then(res => {
          if (res.ok) {
            // console.log('click');
            setIsLoading(false); //(변경)
            // alert('단어 추가가 완료되었습니다.');
            history.push('/voca/day/' + dayRef.current.value); //해당 페이지로 이동 / Link to 처럼 a태그를 사용하지 않고 페이지 전환할떄 사용
          }
        })
    }

  }
  
  const cancel = () => {
    history.goBack();
  }
  const saveText = isLoading ? "Saving..." : "저장";

  return (
    <>
    <form onSubmit={onSubmit} className={styles.CreateWord_form}>
      <div className={styles.input_area}>
        <label>Eng</label>
        <input type="text" placeholder="apple" ref={engRef} />
      </div>
      <div className={styles.input_area}>
        <label>Kor</label>
        <input type="text" placeholder="사과" ref={korRef} />
      </div>
      <div className={styles.input_area}>
        <label>Day</label>
        <select ref={dayRef}>
          {dayOption}
        </select>
      </div>
      <button type="submit" disabled={isLoading}>{saveText} {isLoading}</button>
    </form>
    <button onClick={cancel} className={styles.btn_cancel}>취소</button>
    </>
  )
}