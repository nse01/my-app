import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './component/Header';
import ContentsArea from './component/ContentsArea';
import TodoListContainer from './component/todolist/TodoListContainer';
import EmptyPage from './component/EmptyPage';
import VocaHeader from './component/voca/VocaHeader';
import DayList from './component/voca/DayList';
import Day from './component/voca/Day';
import CreateWord from './component/voca/CreateWord';
import CreateDay from './component/voca/CreateDay';
import Etc from './component/etc/Etc';
import { useState } from 'react';

function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app_container">
        <Header />
        <ContentsArea />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/todo" component={TodoListContainer} />
          <Route path="/voca">
            <VocaHeader />
            <Switch>
              <Route exact path="/voca" component={DayList} />
              <Route exact path="/voca/day/:day" component={Day} />
              <Route exact path="/voca/create_word" component={CreateWord} />
              <Route exact path="/voca/create_day" component={CreateDay} />
              {/* <Route component={EmptyPage} /> */}
            </Switch>
          </Route>
          <Route exact path="/etc" component={Etc} />
          {/* <Route component={EmptyPage} /> */}
        </Switch>
        {/* <Switch>
          <Route exact path="/" />
          <Route exact path="/todo" component={TodoListContainer} />
          <VocaContainer/>
          <Route path="*">
            <EmptyPage/>
          </Route>
        </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
