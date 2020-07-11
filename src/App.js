
import React, { Component } from 'react';
// import uuid from 'uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <TodoInput />
          <TodoList />          
        </div>
      </div>
    )
  }
}
