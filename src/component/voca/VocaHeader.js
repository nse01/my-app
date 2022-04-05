import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useParams, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./VocaHeader.module.css"
import useFetch from "../hooks/useFetch";

export default function VocaHeader(props) {
  const {registerDay} = useParams();
  const location = useLocation();
  const {pathname} = location.pathname;
  


  
  return (
    <div className={styles.header}>
      <h1><Link to={{
        pathname:"/voca",
        state : {data:'1'}
      }}>영단어</Link></h1>
      <div className={styles.menu}>
        <Link to={{
          pathname:"/voca/create_word",
          state : {data:'1'}
          }}  className={styles.link} >단어 추가</Link>
        <Link to="/voca/create_day" className={styles.link}>Day 추가</Link>
      </div>
    </div>
  )
}