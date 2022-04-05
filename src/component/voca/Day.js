import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";
import styles from "./Day.module.css"



export default function Day() {

  const { day } = useParams();
  const words = useFetch('http://localhost:3001/words?day=' + day);
  const days = useFetch('http://localhost:3001/days');
  
  

  const dayWords = words.map((word) => {
    return (
      <Word word={word} key={word.id} />
    )
  })

  const loading = () => {
    
    if(!Number(day)){
      return <span>올바른 날짜가 아닙니다.<br /><Link to='/voca'>리스트로 돌아가기</Link></span>
    }
    if(Number(day)>days.length){
      return <span>Total Day : {days.length} <br /><Link to='/voca'>리스트로 돌아가기</Link></span>
    }
    if (words.length === 0 && Number(day)<days.length) {
      return <span>Loading...</span>
    }
    
  }



  return (
    <>
      <h2>Day {day}</h2>
      {loading()}
      <div className={styles.btn_day_list}><Link to='/voca'>Day List</Link></div>
      <table className={styles.table}>
        <tbody>
          {dayWords}
        </tbody>
      </table>
      <div className={styles.btn_paging}>
        {day > 1 && Number(day)<=days.length && <Link to={`/voca/day/` + (Number(day) - 1)} className={styles.btn_before}> 이전 Day {Number(day) - 1}</Link>}
        {day < days.length && <Link to={`/voca/day/` + (Number(day) + 1)} className={styles.btn_next}> 다음 Day {Number(day) + 1}</Link>}
      </div>
    </>
  )
}