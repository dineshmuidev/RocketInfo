import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class RocketTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div class="d-flex justify-content-between">
        <div> {this.props.title} ({this.props.status ? 'success' : 'failure'})</div>
        <Button onClick={() => this.props.reset()}>Reset</Button>
      </div>;
  }
}

export default RocketTitle;
