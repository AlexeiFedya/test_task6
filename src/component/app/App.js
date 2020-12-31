import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Header} from '../header/Header'

import {EmployeePage} from '../../pages/todo-page/Employee-page'
import {HomePage} from '../../pages/home-page/Home-page';



function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route
          path='/'
          component = {HomePage} 
          exact />
        <Route
          path='/employee'
          component= {EmployeePage}/>  
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;