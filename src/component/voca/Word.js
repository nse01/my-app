import React,{useState} from "react";
import styles from "./Word.module.css"

export default function Word (props) { 
    const {word} = props;
    const [isShow, setIsShow] = useState(false)
    const [isDone, setIsDone] = useState(word.isDone);
    const [words, setWords] = useState(word)
    
    const toggleShow = () => {
        setIsShow(!isShow);
    }

    //POST
    const toggleDone = () => {
        // setIsDone(!isDone);
        fetch('http://localhost:3001/words/'+words.id,{
            method : 'PUT',
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                ...words,
                isDone:!isDone
            })
        })
        .then(res => {
            if(res.ok){ 
                setIsDone(!isDone)
            }
        })
    }

    if(words.id === 0) return null

    const del = () => {
        if(window.confirm('삭제하시겠습니까?')){
            fetch('http://localhost:3001/words/'+words.id,{
                method : 'DELETE'
            })
            .then(res => {
                if(res.ok){ 
                    setWords({id:0})
                }
            })
        }
    }

    const toggleShowTxt = isShow ? "뜻 숨기기" : "뜻 보기";
    
    return(
        <tr className={isDone?styles.off:""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{words.eng}</td>
            <td>{isShow && words.kor}</td>
            <td className={styles.button}>
                <button onClick={toggleShow}>{toggleShowTxt}</button>    
                <button onClick={del} className={styles.btn_del}>삭제</button>    
            </td>
        </tr>
    )
}