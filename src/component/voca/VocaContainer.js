import React, { useState } from "react";
import { Route } from "react-router-dom";
import Day from "./Day";
import DayList from "./DayList";
import VocaHeader from "./VocaHeader";
import CreateDay from "./CreateDay";
import CreateWord from "./CreateWord";



export default function VocaContainer() {
  const [regDay, setRegDay] = useState('');
  const registerDay = (d) => {
    setRegDay(d)
  }
  // console.log(regDay)
  return (
    <>
    VocaContainer
      <VocaHeader />
      <Route exact path="/voca">
        <DayList registerDay={registerDay}/>
        </Route>
      <Route exact path="/voca/day/:day" component={Day} />
      <Route exact path="/voca/create_word" component={CreateWord} />
      <Route exact path="/voca/create_day" component={CreateDay} />
    </>
  )
}