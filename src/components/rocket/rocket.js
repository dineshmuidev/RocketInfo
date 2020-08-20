import React, { Component } from 'react';
import RocketTitle from './rocket-title/rocket-title'
import RocketDetails from './rocket-details/rocket-details'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class Rocket extends Component {
  state= {
    rocketDetails : [
      {
          name: 'FalconSat',
          image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
          details: 'Engine failure at 33 seconds and loss of vehicle',
          success: false
      },
      {
          name: 'RatSat',
          image: 'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png',
          details: 'Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1',
          success: true
      },
      {
          name:  'Trailblazer',
          image:  'https://images2.imgbox.com/3d/86/cnu0pan8_o.png',
          details: 'Residual stage 1 thrust led to collision between stage 1 and stage 2',
          success: false
      },
      {
          name: 'RatSat',
          image: 'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png',
          details: 'Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1',
          succes: true 
      },
      {
          name: 'CRS-1',
          image: 'https://images2.imgbox.com/0b/33/2eLGEejP_o.png',
          details:'CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owners contractual right to decline a second ignition of the second stage under some conditions.',
          success: true
      },
      {
          name: 'CASSIOPE',
          image: 'https://images2.imgbox.com/91/27/VhC1TTYN_o.png',
          details:'Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle.',
          success: 'false',
      },
  ],
  index: 0
  }

  constructor(props) {
    super(props);
    // this.resetHandler = this.resetHandler.bind(this);
  }

  // let a = 10;
  // obj = {
  //   a
  // }

  prev() {
    const index = this.state.index - 1;
    this.setState({index});  // this.setState({index : index})
  }

  next() {
    const index = this.state.index + 1;
    this.setState({index});  // this.setState({index : index})
  }

  resetHandler(){
    this.setState({index : 0});
  }

  render() {
    return <div>
      <RocketTitle title={this.state.rocketDetails[this.state.index].name}
                 status={this.state.rocketDetails[this.state.index].success}
                 reset ={() =>this.resetHandler()}></RocketTitle>
      <RocketDetails  imageUrl={this.state.rocketDetails[this.state.index].image}
                 details={this.state.rocketDetails[this.state.index].details}></RocketDetails>
      <ButtonGroup aria-label="Basic example">
      <Button disabled={this.state.index === 0}
       onClick={()=> this.prev()}>Prev</Button>
      <Button disabled={this.state.index === this.state.rocketDetails.length - 1}
        onClick={() => this.next()}>Next</Button>
      </ButtonGroup>
    </div>;
  }
}

export default Rocket;

