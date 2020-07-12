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
* Nombre de archivo: TodoInput.js
* Autor: ElChava
* Fecha de creación: 11/07/2020
*/

import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    return (
      <div>
        <h3 className="text-capitilize text-center">Todo input</h3>
        <input 
          type="text" 
          className="form-control mb-2" 
          placeholder="Add a todo item..."
          onChange={this.props.handleChange} 
          name="todoItem"
          />
        <button 
          type="button" 
          className="btn btn-primary btn-lg btn-block p-1"
          onClick={this.props.handleSubmit}
          >
          Submit
        </button>
      </div>
    )
  }
}
