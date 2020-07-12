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
* Nombre de archivo: TodoItem.js
* Autor: ElChava
* Fecha de creación: 11/07/2020
*/

import React, { Component } from 'react';


export default class TodoItem extends Component {

  render() {
    const { item, handleDeleteItem, handleEditItem } = this.props;
    const description = item.description;

    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{description}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEditItem}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDeleteItem}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    )
  }
}
