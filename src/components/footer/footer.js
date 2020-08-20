import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


class Footer extends Component {

  state={
    footer :'footer mention social media logo denotes in the footer side'
  }

  constructor(props){
    super(props);
  }

  render() {
    return ( 
      <div className="fixed-bottom" >
        <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        <Nav.Link href="/home">About learn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-1">future project</Nav.Link>
         </Nav.Item>
        <Nav.Item>
       <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-3">our offical website</Nav.Link>
        </Nav.Item>
      </Nav>  
      
      </div>
       
    )
}
}

export default Footer;
