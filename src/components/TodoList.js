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
* Nombre de archivo: TodoList.js
* Autor: ElChava
* Fecha de creación: 11/07/2020
*/

import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h3 className="text-capitilize text-center mt-3">Todo List</h3>
        {
          this.props.items.map((todoItem) => <TodoItem
            key = {todoItem.itemId}
            //      TodoItemProps
            item={todoItem}
            // ---------------------
            handleDeleteItem={() => this.props.handleDeleteItem(todoItem.itemId)}
            handleEditItem={() => this.props.handleEditItem(todoItem.itemId)}
            // ---------------------
          ></TodoItem>)
        }
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block p-1"
          onClick={this.props.handleClearList}
        >
          Clear List
        </button>
      </div>
    )
  }
}
