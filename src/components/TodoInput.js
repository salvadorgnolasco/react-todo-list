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
        <h3 className="text-capitalize text-center">Todo input</h3>
        <div className="card card-body my-3">
          <form onSubmit={this.props.handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend"></div>
              <div className="input-group-prepend"></div>
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="Add todo item"
                onChange={this.props.handleChange}
                name="todoItem"
                value={this.props.description}
              />
            </div>
            <button
              type="submit"
              disabled={this.props.description === ''}
              className={
                this.props.editItem ?
                "btn btn-block btn-success mt-3 text-uppercase" :
                "btn btn-block btn-primary mt-3 text-uppercase"}
              >
              {this.props.editItem ? 'Edit Item' : 'Add item'}
            </button>
          </form>
        </div>
      </div>
    )
  }
}
