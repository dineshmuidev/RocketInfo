import React, { Component } from "react";
import Header from "./components/header/header";
import Rocket from "./components/rocket/rocket";
import Footer from "./components/footer/footer";


class App extends Component {
  
  render() {
    return (
      <div>
        <Header></Header>
        <Rocket></Rocket>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
