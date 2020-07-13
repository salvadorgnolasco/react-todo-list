/**
* Copyright (C) 2020 
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* Nombre de archivo: App.js
* Autor: ElChava
* Fecha de creación: 11/07/2020
*/

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Timer from './components/Timer';

import { v4 as uuidv4 } from 'uuid';

import React, { Component } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * App
 */
export default class App extends Component {

  /**
   * Constructor
   * It defines all initial values for state
   * @param {*} props 
   */
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { itemId: uuidv4(), description: 'wake up' },
        { itemId: uuidv4(), description: 'do homework' }],
      itemId: uuidv4(),
      description: '',
      editItem: false,
      time: new Date(),
    };
  }

  /**
   * Given a rendered application
   * When all components have been mounted
   * Then a process will be thrown in order to show current time
   */
  componentDidMount() {
    const tick = () => {
      this.setState({
        time: new Date()
      });
    };

    this.timerId = setInterval(() => tick(), 1000);
  }

  /**
   * Given a new Item
   * When the user type it on the text box
   * Then the todo item will be saved within the state
   */
  handleChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  }

  /**
   * Given a new Item
   * When the user add it
   * Then the new todo item will be render within the Todo list
   */
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      itemId: this.state.itemId,
      description: this.state.description,
    };

    const updatedTodoList = [...this.state.items, newItem];

    this.setState({
      itemId: uuidv4(),
      items: updatedTodoList,
      description: '',
      editItem: false,
    });
  }

  /**
   * Given a list of todo items
   * When a user wanted to delete all items
   * Then the Todo List will show no items
   */
  handleClearList = () => {
    // console.log('Clear list');
    this.setState({
      items: [],
    });
  }

  /**
   * Given a Todo item 
   * When a user wanted to delete it
   * Then the todo item will be removed from the todo list
   */
  handleDeleteItem = (itemId) => {
    const items = this.state.items.filter((item) => item.itemId !== itemId);
    this.setState({
      items: items,
    });
  }

  /**
   * Given a todo item
   * When a user wanted to edit it
   * Then it will be rendered within the TodoInput component
   * And show a green edit button
   */
  handleEditItem = (itemId) => {
    const filteredItems = this.state.items.filter((item) => item.itemId !== itemId);
    const item = this.state.items.find((item) => item.itemId === itemId);

    this.setState({
      itemId: item.itemId,
      description: item.description,
      items: filteredItems,
      editItem: true,
    });
  }

  /**
   * Todo list Application
   * should be composed by an input component and 
   * a list of element of things to do
   */
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <Timer time={this.state.time.toLocaleString()} />
              <TodoInput
                //           TodoInputProps
                description={this.state.description}
                editItem={this.state.editItem}
                // -------------------------------------
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              // -------------------------------------
              />
              <TodoList
                //           TodoListProps
                // -------------------------------------
                items={this.state.items.slice()}
                // -------------------------------------
                handleDeleteItem={this.handleDeleteItem}
                handleEditItem={this.handleEditItem}
                handleClearList={this.handleClearList}
              // -------------------------------------
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
