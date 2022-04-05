import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./EmptyPage.module.css"

export default function EmptyPage() {
  const history = useHistory();
  
  
  const goBackHistory = () => {
    history.goBack();
  }
  

  return (
    <div className={styles.empty_page}>
      <div className={styles.empty_cnt}>
        <h2>잘못된 접근입니다.</h2>
        <div className={styles.empty_btn}>
          <Link to="/" className={styles.btn_home}>홈으로</Link>
          <Link to="" onClick={goBackHistory} className={styles.btn_back}>이전 페이지</Link>
        </div>
        
      </div>
      
    </div>
  )
}