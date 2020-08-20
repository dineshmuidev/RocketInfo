import React, { Component } from 'react';

class RocketDetails extends Component {
  render() {
    return <div>
      <img src={this.props.imageUrl}/>
      <div>{this.props.details}</div>
    </div>;
  }
}

export default RocketDetails;
