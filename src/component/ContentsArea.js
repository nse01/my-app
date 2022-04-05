import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContentsArea.module.css"

export default function ContentsArea() {


  return (
    <div>
      <div>
        <Link to="/todo" className={styles.tab}>TodoList</Link>
        <Link to="/voca" className={styles.tab}>Vocabulary</Link>
        <Link to="/etc" className={styles.tab}>ETC</Link>
      </div>
    </div>
  )
}