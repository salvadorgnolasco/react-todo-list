import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    const { time } = this.props;

    return (
      <div class="alert alert-primary text-right" role="alert">
        {time}
      </div>
    )
  }
}
