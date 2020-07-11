import React, { Component } from 'react';
import Item from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>Hello from list</h2>
        <Item />
      </div>
    )
  }
}
