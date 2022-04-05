import React from "react";
import TodoItmems from "./TodoItems";
import styles from "./TodoItemsContainer.module.css"


export default function TodoItemsContainer(props) {
  const { item, deleteData, changeItem } = props;

  const itemList = item.map((i) => {

    return (
      <TodoItmems key={i.id} item={i} deleteData={deleteData} changeItem={changeItem} />
    )

  });


  return (
    <div>
      <div className={styles.item_total}>
        <span className={styles.total}>Total : {item.length}</span>
      </div>
      {itemList}
    </div>

  )
} 