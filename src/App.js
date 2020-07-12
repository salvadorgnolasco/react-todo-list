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

import { v4 as uuidv4 } from 'uuid';

import React, { Component } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * App
 */
export default class App extends Component {
  state = {
    items: [
      { itemId: uuidv4(), description: 'wake up' },
      { itemId: uuidv4(), description: 'do homework' }],
    itemId: uuidv4(),
    description: '',
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.description === '') {
      return;
    }

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

  handleClearList = () => {
    // console.log('Clear list');
    this.setState({
      items: [],
    });
  }

  handleDeleteItem = (itemId) => {
    console.log('Delete item');
  }

  handleEditItem = (itemId) => {
    console.log('Edit item');
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <TodoInput
                description={this.state.description}
                //           TodoInputProps
                item={''}
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
